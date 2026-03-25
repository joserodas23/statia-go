/* ============================================
   STATIA GO — api/ai.js
   Vercel Serverless Function — proxy seguro para Gemini
   La API key nunca se expone al frontend
   by Jose Rodas
   ============================================ */

export default async function handler(req, res) {
  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt requerido' });
  }

  const key = process.env.GEMINI_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key no configurada en el servidor' });
  }

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 2500 }
        })
      }
    );

    const data = await geminiRes.json();

    if (!geminiRes.ok) {
      const msg = data?.error?.message || `Gemini error ${geminiRes.status}`;
      return res.status(502).json({ error: msg });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
      || 'No se pudo generar la interpretación.';

    return res.status(200).json({ text });

  } catch (e) {
    return res.status(500).json({ error: e.message || 'Error interno del servidor' });
  }
}
