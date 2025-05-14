import { useEffect, useState } from "react";
import project from "./projects/projects.json";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as SI from "react-icons/si";

export function Projetos() {
  const [data, setData] = useState([]);

  const getIconComponent = (name, size = 24) => {
    const formatted =
      "Si" +
      name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .replace(/(^\w)/, (c) => c.toUpperCase());
    const Icon = SI[formatted];
    return Icon ? <Icon size={size} title={name} /> : <span>{name}</span>;
  };

  useEffect(() => {
    if (Array.isArray(project) && project.length > 0) {
      const projetos = Object.values(project[0]);
      setData(projetos);
    }
  }, []);

  return (
    <div className="border-b-2 border-[#2c2c3f] w-full flex justify-center bg-[#0a0a1a] bg-gradient-to-tl from-[#151549] via-[#121224] to-[#0f0f1a]">
      <section className="text-white py-20 px-4 max-w-300 w-full">
        <h2 className="text-left text-4xl font-bold mb-16 bg-gradient-to-r from-blue-300 via-violet-400 to-white text-transparent bg-clip-text">
          Projetos
        </h2>
        <div className="relative max-w-300 mx-auto grid grid-cols-3 gap-24 ">
          {typeof data === "object" &&
            data.map((item, index) => (
              <Card
                sx={(theme) => ({
                  margin: "auto",
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  maxWidth: 500,
                  minHeight: "100%",
                  marginLeft: "auto",
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "start",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "column",
                    paddingTop: theme.spacing(2),
                  },
                })}
              >
                <CardContent>
                  <h1 className="text-2xl font-bold">{item.nome}</h1>
                  <p className="text-sm font-mono text-justify indent-4">
                    {item.sobre}
                  </p>
                  <div className="flex flex-row gap-1 mt-3">
                    {item.tecnologia.map((item) => getIconComponent(item))}
                  </div>
                </CardContent>
                <CardContent>
                  <Button
                    href={`/projetos/${item.slug}`}
                    sx={{
                      backgroundImage:
                        "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
                      boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
                      borderRadius: 100,
                      paddingLeft: 3,
                      paddingRight: 3,
                      marginTop: 3,
                      color: "#ffffff",
                    }}
                  >
                    Ver mais
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
}

export function ProjetosMain() {
  const [returnsPath, setReturnsPath] = useState([]);
  const [data, setData] = useState([]);

  const getIconComponent = (name, size = 24) => {
    const formatted =
      "Si" +
      name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .replace(/(^\w)/, (c) => c.toUpperCase());
    const Icon = SI[formatted];
    return Icon ? <Icon size={size} title={name} /> : <span>{name}</span>;
  };

  useEffect(() => {
    if (window.location.pathname) {
      setReturnsPath(String(window.location.pathname).split("/"));
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(project) && project.length > 0) {
      const projetos = Object.values(project[0]);
      setData(projetos);
    }
  }, []);

  return (
    <div className="border-b-2 border-[#2c2c3f] w-full flex justify-center bg-[#0a0a1a] bg-gradient-to-tl from-[#151549] via-[#121224] to-[#0f0f1a] mt-25">
      <div>
        <div className="w-full h-fit text-sm text-white/60 col-span-2 pt-3">
          {returnsPath.map((path, i) => {
            if (i == 0) {
              return (
                <a key={i + 1} href={`/${path}`}>
                  HOME
                </a>
              );
            } else if (path === returnsPath.at(-1)) {
              return <strong key={i + 1}> / {String(path).toUpperCase()}</strong>;
            } else {
              return (
                <a key={i + 1} href={`/${path}`}>
                  {" "}
                  / {String(path).toUpperCase()}
                </a>
              );
            }
          })}
          <hr />
        </div>
        <section className="text-white py-20 px-4 max-w-300 w-full">
          <h2 className="text-left text-4xl font-bold mb-16 bg-gradient-to-r from-blue-300 via-violet-400 to-white text-transparent bg-clip-text">
            Projetos
          </h2>
          <div className="relative max-w-300 mx-auto grid grid-cols-3 gap-24 ">
            {typeof data === "object" &&
              data.map((item, index) => (
                <Card
                  sx={(theme) => ({
                    margin: "auto",
                    borderRadius: theme.spacing(2),
                    transition: "0.3s",
                    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                    position: "relative",
                    maxWidth: 500,
                    minHeight: "100%",
                    marginLeft: "auto",
                    overflow: "initial",
                    background: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "start",
                    paddingBottom: theme.spacing(2),
                    [theme.breakpoints.up("md")]: {
                      flexDirection: "column",
                      paddingTop: theme.spacing(2),
                    },
                  })}
                >
                  <CardContent>
                    <h1 className="text-2xl font-bold">{item.nome}</h1>
                    <p className="text-sm font-mono text-justify indent-4">
                      {item.sobre}
                    </p>
                    <div className="flex flex-row gap-1 mt-3">
                      {item.tecnologia.map((item) => getIconComponent(item))}
                    </div>
                  </CardContent>
                  <CardContent>
                    <Button
                      href={`/projetos/${item.slug}`}
                      sx={{
                        backgroundImage:
                          "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
                        boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
                        borderRadius: 100,
                        paddingLeft: 3,
                        paddingRight: 3,
                        marginTop: 3,
                        color: "#ffffff",
                      }}
                    >
                      Ver mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
