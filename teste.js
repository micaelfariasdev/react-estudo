import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/buscar-imagem", async (req, res) => {
  const termo = req.query.q;
  const url = `https://duckduckgo.com/?q=${encodeURIComponent(termo + ' logo time')}&t=h_&iax=images&ia=images`;

  const html = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" }
  }).then(r => r.text());

  const match = html.match(/"image":"([^"]+)"/);
  res.json({ img: match ? match[1] : null });
});

app.listen(3001, () => console.log("Proxy rodando na porta 3001"));
