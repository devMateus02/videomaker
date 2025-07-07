import { useEffect, useState } from "react";

export default function VoltarAoTopo() {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setMostrarBotao(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const VoltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    mostrarBotao && (
      <button
        onClick={VoltarAoTopo}
        className=" p-3 text-white rounded-full shadow-lg cursor-pointer underline"
      >
        Voltar ao topo
      </button>
    )
  );
}
