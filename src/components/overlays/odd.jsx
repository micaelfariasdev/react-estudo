import { useEffect, useRef } from "react";
import './odd.css'


export default function OddsOverlay() {
  const nameTeam1Ref = useRef(null);
  const nameTeam2Ref = useRef(null);
  const logoTeam1Ref = useRef(null);
  const logoTeam2Ref = useRef(null);
  const oddW1Ref = useRef(null);
  const oddW2Ref = useRef(null);
  const oddXRef = useRef(null);

  useEffect(() => {
    const WSS_URL = "wss://eu-swarm-springre.trexname.com/";
    let socket;
    let sessionId = null;
    let mercado = null;
    const idTeam = {};
    const params = new URLSearchParams(window.location.search);
    let link = params.get("link");
    if (link) link = link.split("/");

    const COMMAND_1_SESSION =
      '{"command":"request_session","params":{"language":"pt-br","site_id":18749751,"source":42,"is_wrap_app":false,"afec":"KdRt5B_HMvk8aGSkX9vqJfhIWk0kddJwJPR3"},"rid":"request_session383060301371091"}';

    const currentSubscriptionRequest = `{
      "command": "get",
      "params": {
        "source": "betting",
        "what": {
          "sport": ["id", "name", "alias"],
          "competition": ["name", "id"],
          "game": ["id","type","team1_name","team2_name","team1_id","team2_id","info","start_ts","markets_count","exclude_ids","team1_reg_name","team2_reg_name","video_id","video_id2","stats","score1","score2","show_type","add_info_name","tv_info","sportcast_id","match_length"],
          "market": ["type","name","order","main_order","type","id","base","express_id","col_count","market_type","prematch_express_id"],
          "event": ["id","price","order","type_1"],
          "region": ["name","alias"]
        },
        "where": {
          "sport": { "alias": "Soccer" },
          "game": { "id": ${link.at(-1)} },
          "region": { "alias": "${link.at(-3)}" },
          "competition": { "id": ${link.at(-2)} }
        },
        "subscribe": true
      }
    }`;

    async function buscarImagem(termo) {
      const q = encodeURIComponent(termo + " fc sc logo escudo time");
      const url =  `https://www.bing.com/images/search?q=${q}&form=HDRSC3&first=1`
      
      const html = await fetch(url).then((r) => r.text());
      const match = html.match(
        /<img(?:(?!google)[^>])*src="([^"]+)"(?:(?!google)[^>])*>/i
      );
      return match ? match[0] : null;
    }

    function flashUpdate(ref, newPrice) {
      const el = ref.current.querySelector(".odd-value");
      if (!el || isNaN(newPrice)) return;
      const oldPrice = parseFloat(el.textContent);
      el.textContent = newPrice.toFixed(2);
      const parent = ref.current;
      if (oldPrice !== newPrice) {
        parent.style.backgroundColor =
          newPrice > oldPrice ? "#b3ffb3" : "#ffb3b3";
        setTimeout(() => {
          parent.style.backgroundColor = "#f7f7f7";
        }, 800);
      }
    }

    function updateNames(dataRoot) {
      if (!dataRoot || !dataRoot.sport) return;
      for (const sportId in dataRoot.sport) {
        const sport = dataRoot.sport[sportId];
        for (const regionId in sport.region) {
          const region = sport.region[regionId];
          for (const competitionId in region.competition) {
            const competition = region.competition[competitionId];
            if (competition.game) {
              for (const gameId in competition.game) {
                const game = competition.game[gameId];
                if (
                  game.team1_name &&
                  nameTeam1Ref.current.textContent === "Carregando..."
                ) {
                  nameTeam1Ref.current.textContent = game.team1_name;
                  buscarImagem(game.team1_name)
                    .then((imgTag) => {
                      if (imgTag) logoTeam1Ref.current.innerHTML = imgTag;
                    })
                    .catch(() => {});
                }
                if (
                  game.team2_name &&
                  nameTeam2Ref.current.textContent === "Carregando..."
                ) {
                  nameTeam2Ref.current.textContent = game.team2_name;
                  buscarImagem(game.team2_name)
                    .then((imgTag) => {
                      if (imgTag) logoTeam2Ref.current.innerHTML = imgTag;
                    })
                    .catch(() => {});
                }
                return game;
              }
            }
          }
        }
      }
    }

    function processMessage(event) {
      const data = event.data;
      try {
        const response = JSON.parse(data);
        if (
          !sessionId &&
          response.rid === "request_session383060301371091" &&
          response.data &&
          response.data.session_id
        ) {
          sessionId = response.data.session_id;
          sendCommand(currentSubscriptionRequest);
        }
        const dataRoot = response.data?.data;
        const root = response;

        function encontrarMercadoPeloTipo(data) {
          if (typeof data === "object" && data !== null) {
            if (data.type === "P1XP2") return data;
            for (const key in data) {
              const result = encontrarMercadoPeloTipo(data[key]);
              if (result) return result;
            }
          }
          if (Array.isArray(data)) {
            for (const item of data) {
              const result = encontrarMercadoPeloTipo(item);
              if (result) return result;
            }
          }
          return null;
        }

        function encontrarPorId(data, id) {
          if (typeof data === "object" && data !== null) {
            if (data.hasOwnProperty(id)) return data[id];
            for (const key in data) {
              const result = encontrarPorId(data[key], id);
              if (result) return result;
            }
          }
          if (Array.isArray(data)) {
            for (const item of data) {
              const result = encontrarPorId(item, id);
              if (result) return result;
            }
          }
          return null;
        }

        if (!mercado) {
          updateNames(dataRoot);
          mercado = encontrarMercadoPeloTipo(dataRoot);
          const eventos = mercado?.event || {};
          for (const id in eventos) {
            const ev = eventos[id];
            if (ev.type_1 === "W1") {
              flashUpdate(oddW1Ref, ev.price);
              idTeam["W1"] = id;
            }
            if (ev.type_1 === "X") {
              flashUpdate(oddXRef, ev.price);
              idTeam["X"] = id;
            }
            if (ev.type_1 === "W2") {
              flashUpdate(oddW2Ref, ev.price);
              idTeam["W2"] = id;
            }
          }
        }

        const encontrado = encontrarPorId(root, mercado.id)?.event;
        if (encontrado) {
          for (const id in encontrado) {
            const ev = encontrado[id];
            if (id === idTeam["W1"]) flashUpdate(oddW1Ref, ev.price);
            if (id === idTeam["X"]) flashUpdate(oddXRef, ev.price);
            if (id === idTeam["W2"]) flashUpdate(oddW2Ref, ev.price);
          }
        }
      } catch {}
    }

    function sendCommand(raw) {
      if (!socket || socket.readyState !== WebSocket.OPEN) return;
      let cmd;
      try {
        cmd = typeof raw === "string" ? JSON.parse(raw) : raw;
      } catch {
        return;
      }
      if (sessionId && cmd.params && !cmd.params.session_id)
        cmd.params.session_id = sessionId;
      socket.send(JSON.stringify(cmd));
    }

    function connectWebSocket() {
      socket = new WebSocket(WSS_URL);
      socket.onopen = () => {
        sendCommand(COMMAND_1_SESSION);
        sendCommand(currentSubscriptionRequest);
      };
      socket.onmessage = processMessage;
    }

    connectWebSocket();
    return () => socket && socket.close();
  }, []);

  return (
    <div
      className="match-odds-display"
      style={{
        fontFamily: "Arial, sans-serif",
        position: "fixed",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        color: "#fff",
        backgroundColor: "transparent",
      }}
    >
      <div className="top-row" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "end", marginBottom: "50px" }}>
        <div className="team-block team1" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div ref={nameTeam2Ref} className="team-name" style={{ background: "white", color: "black", borderRadius: "10px", padding: "5px", width: "100%", textAlign: "center" }}>Carregando...</div>
          <div className="team-info" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div ref={logoTeam2Ref} className="team-logo" style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden" }}>
              <img src="https://cdn-icons-png.flaticon.com/512/451/451921.png" alt="default" style={{ width: "100%", height: "100%" }} />
            </div>
            <div ref={oddW2Ref} className="odd-pill" style={{ backgroundColor: "#f7f7f7", color: "#1a1a1a", borderRadius: "50px", width: "55px", textAlign: "center" }}>
              <span className="odd-value">--</span>
            </div>
          </div>
        </div>

        <div className="mid" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <div className="logo-bet" style={{ background: "black", borderRadius: "10px", width: "75%", height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src="https://lncimg.lance.com.br/cdn-cgi/image/width=1280,height=720,quality=75,fit=cover,format=webp/uploads/2025/05/H2bet-1-1-aspect-ratio-512-320.jpg"
              alt="logo"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="vs-text" style={{ fontSize: "2.2rem", fontWeight: "900", color: "white" }}>VS</div>
        </div>

        <div className="team-block team2" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div ref={nameTeam1Ref} className="team-name" style={{ background: "white", color: "black", borderRadius: "10px", padding: "5px", width: "100%", textAlign: "center" }}>Carregando...</div>
          <div className="team-info" style={{ display: "flex", alignItems: "center", gap: "10px", flexDirection: "row-reverse" }}>
            <div ref={logoTeam1Ref} className="team-logo" style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden" }}>
              <img src="https://cdn-icons-png.flaticon.com/512/451/451921.png" alt="default" style={{ width: "100%", height: "100%" }} />
            </div>
            <div ref={oddW1Ref} className="odd-pill" style={{ backgroundColor: "#f7f7f7", color: "#1a1a1a", borderRadius: "50px", width: "55px", textAlign: "center" }}>
              <span className="odd-value">--</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-row" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div ref={oddXRef} className="odd-pill" style={{ backgroundColor: "#f7f7f7", color: "#1a1a1a", borderRadius: "50px", width: "55px", textAlign: "center" }}>
          <span className="odd-value">--</span>
        </div>
      </div>
    </div>
  );
}
