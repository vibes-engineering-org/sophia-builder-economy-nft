import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload:
        "eyJkb21haW4iOiJzb3BoaWEtYnVpbGRlci1lY29ub215LW5mdC52ZXJjZWwuYXBwIn0",
      signature:
        "MHg0NTkwN2IxZGJiMWZiMmY0YTRkY2QxMzkxZDEwZWI0NGY1YTBkNTAwNWE2NjEzYzRiMjI2MmRhMmFjODkzM2E4MmJhNTgzMzAyYmU0NjYzMDc5MTcyOTlkMDMxZmI0Y2M3ZDUzYzVkMGU2MTk5MDdiNDU1YTU1Y2E1NTQxYWQzMDFi",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#555555",
      webhookUrl: `${appUrl}/api/webhook`,
      primaryCategory: "art-creativity",
      tags: ["nft", "celo", "minting", "art", "builder"],
    },
  };

  return Response.json(config);
}
