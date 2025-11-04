async function buscarImagem(termo) {
  const r = await fetch(`http://localhost:3001/buscar-imagem?q=${encodeURIComponent(termo)}`);
  const j = await r.json();
  return j.img;
}

const img = await buscarImagem("vasco");
console.log(img);
