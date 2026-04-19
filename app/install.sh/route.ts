import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * GET /install.sh
 *
 * Serves the installer script directly from this landing repo so users can run:
 *
 *   curl -fsSL https://hermes-workspace.com/install.sh | bash
 *
 * No redirect hop, no runtime GitHub fetch, no 502s if raw.githubusercontent is
 * flaky or rate-limited.
 *
 * Source of truth should be kept in sync with:
 *   /Users/aurora/hermes-workspace/install.sh
 * and checked into this repo under scripts/install.sh
 */

export const revalidate = 300;

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "scripts", "install.sh");
    const body = await readFile(filePath, "utf8");

    return new Response(body, {
      status: 200,
      headers: {
        "content-type": "text/x-shellscript; charset=utf-8",
        "cache-control": "public, max-age=300, s-maxage=300",
      },
    });
  } catch (err) {
    return new Response(
      `# Install script unavailable\n# ${err instanceof Error ? err.message : String(err)}\n# Visit https://github.com/outsourc-e/hermes-workspace for manual install.\n`,
      {
        status: 502,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      },
    );
  }
}
