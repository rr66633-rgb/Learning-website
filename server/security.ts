import type { Express, Request, Response, NextFunction } from "express";
import rateLimit, { type Options } from "express-rate-limit";

/**
 * Rate limiter for public inquiry submission endpoint.
 * Limits to 5 requests per minute per IP.
 */
export const inquiryRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: {
      json: {
        message: "Too many requests. Please try again later.",
        code: -32005,
        data: { code: "TOO_MANY_REQUESTS", httpStatus: 429 },
      },
    },
  },
  // Trust proxy for correct IP detection behind load balancer
  validate: { xForwardedForHeader: false },
});

/**
 * Security headers middleware.
 */
export function securityHeaders(req: Request, res: Response, next: NextFunction) {
  // Prevent clickjacking
  res.setHeader("X-Frame-Options", "DENY");

  // Prevent MIME-type sniffing
  res.setHeader("X-Content-Type-Options", "nosniff");

  // XSS Protection (legacy browsers)
  res.setHeader("X-XSS-Protection", "1; mode=block");

  // Referrer policy
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions Policy
  res.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  // Content Security Policy
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://maps.googleapis.com https://forge.manus.ai",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https: http:",
      "connect-src 'self' https://challenges.cloudflare.com https://forge.manus.ai https://manus-analytics.com https://maps.googleapis.com",
      "frame-src 'self' https://challenges.cloudflare.com https://www.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
  );

  next();
}

/**
 * Verify Cloudflare Turnstile CAPTCHA token on the server side.
 */
export async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    // If no secret key configured, skip verification (development mode)
    console.warn("[Security] TURNSTILE_SECRET_KEY not configured, skipping CAPTCHA verification");
    return true;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json() as { success: boolean };
    return data.success === true;
  } catch (error) {
    console.error("[Security] Turnstile verification failed:", error);
    return false;
  }
}

/**
 * Register all security middleware on the Express app.
 */
export function registerSecurityMiddleware(app: Express) {
  // Apply security headers to all requests
  app.use(securityHeaders);

  // Apply rate limiting specifically to inquiry.submit tRPC endpoint
  // tRPC batches requests under /api/trpc, so we target the specific mutation
  app.use("/api/trpc/inquiry.submit", inquiryRateLimiter);
}
