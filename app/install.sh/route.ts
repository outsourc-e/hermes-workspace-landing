/**
 * GET /install.sh
 *
 * Proxies the workspace installer script so users can run:
 *
 *   curl -fsSL hermes-workspace.com/install.sh | bash
 *
 * (without the `-L`, matching the Nous one-liner style).
 *
 * Source of truth: outsourc-e/hermes-workspace@main/install.sh
 */

const UPSTREAM =
  "https://raw.githubusercontent.com/outsourc-e/hermes-workspace/main/install.sh";

// Cache for 5 minutes at the edge so we don't hammer GitHub.
export const revalidate = 300;

export async function GET() {
  try {
    const res = await fetch(UPSTREAM, {
      // Vercel edge runtime supports this
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return new Response(
        `# Install script unavailable (upstream ${res.status})\n` +
          `# Please visit https://github.com/outsourc-e/hermes-workspace for manual install instructions.\n`,
        {
          status: 502,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "no-store",
          },
        },
      );
    }

    const body = await res.text();

    return new Response(body, {
      status: 200,
      headers: {
        "content-type": "text/x-shellscript; charset=utf-8",
        "cache-control": "public, max-age=300, s-maxage=300",
        "x-source": UPSTREAM,
      },
    });
  } catch (err) {
    return new Response(
      `# Install script fetch failed\n# ${err instanceof Error ? err.message : String(err)}\n# Visit https://github.com/outsourc-e/hermes-workspace for manual install.\n`,
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
