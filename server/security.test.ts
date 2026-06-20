import { describe, it, expect, vi, beforeEach } from "vitest";
import { verifyTurnstileToken } from "./security";

describe("Security Module", () => {
  describe("verifyTurnstileToken", () => {
    beforeEach(() => {
      vi.unstubAllEnvs();
    });

    it("should skip verification when TURNSTILE_SECRET_KEY is not set", async () => {
      vi.stubEnv("TURNSTILE_SECRET_KEY", "");
      const result = await verifyTurnstileToken("any-token");
      expect(result).toBe(true);
    });

    it("should return false for invalid token when secret key is configured", async () => {
      vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret-key");

      // Mock fetch to return failure
      const mockFetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ success: false }),
      });
      vi.stubGlobal("fetch", mockFetch);

      const result = await verifyTurnstileToken("invalid-token");
      expect(result).toBe(false);

      // Verify the correct endpoint was called
      expect(mockFetch).toHaveBeenCalledWith(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
      );

      vi.unstubAllGlobals();
    });

    it("should return true for valid token when secret key is configured", async () => {
      vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret-key");

      const mockFetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ success: true }),
      });
      vi.stubGlobal("fetch", mockFetch);

      const result = await verifyTurnstileToken("valid-token");
      expect(result).toBe(true);

      vi.unstubAllGlobals();
    });

    it("should return false when fetch throws an error", async () => {
      vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret-key");

      const mockFetch = vi.fn().mockRejectedValue(new Error("Network error"));
      vi.stubGlobal("fetch", mockFetch);

      const result = await verifyTurnstileToken("any-token");
      expect(result).toBe(false);

      vi.unstubAllGlobals();
    });
  });
});
