import type { Express } from "express";
import { ENV } from "./env";

const CDN_BASE = "https://d36hbw14aib5lz.cloudfront.net/310519663757302822/6L2CpNH9bCGNgbsvFwL2vd";

export function registerStorageProxy(app: Express) {
  app.get("/manus-storage/*", async (req, res) => {
    const key = (req.params as Record<string, string>)[0];
    if (!key) {
      res.status(400).send("Missing storage key");
      return;
    }

    // If Forge API is available, use presigned URLs
    if (ENV.forgeApiUrl && ENV.forgeApiKey) {
      try {
        const forgeUrl = new URL(
          "v1/storage/presign/get",
          ENV.forgeApiUrl.replace(/\/+$/, "") + "/",
        );
        forgeUrl.searchParams.set("path", key);

        const forgeResp = await fetch(forgeUrl, {
          headers: { Authorization: `Bearer ${ENV.forgeApiKey}` },
        });

        if (forgeResp.ok) {
          const { url } = (await forgeResp.json()) as { url: string };
          if (url) {
            res.set("Cache-Control", "public, max-age=86400");
            res.redirect(307, url);
            return;
          }
        }
      } catch (err) {
        console.warn("[StorageProxy] Forge failed, falling back to CDN:", err);
      }
    }

    // Fallback: redirect to CDN directly
    res.set("Cache-Control", "public, max-age=86400");
    res.redirect(307, `${CDN_BASE}/${key}`);
  });
}
