import type { NextApiRequest, NextApiResponse } from "next";

function getFormspreeEndpoint() {
  return (
    process.env.FORMSPREE_ENDPOINT ||
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, website, source } = req.body ?? {};

  if (typeof website === "string" && website.trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 3 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.trim().length < 3
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const formspreeEndpoint = getFormspreeEndpoint();

  if (!formspreeEndpoint) {
    return res.status(500).json({ error: "Missing FORMSPREE_ENDPOINT" });
  }

  try {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        source: typeof source === "string" ? source : "contact",
        subject:
          source === "closed-beta"
            ? "Nuevo email para la prueba cerrada de FitStats"
            : "Nuevo mensaje desde FitStats",
      }),
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Mail sending failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      error: `Mail sending failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    });
  }
}
