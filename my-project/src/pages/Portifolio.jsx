import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Load from "../components/Load";
import Tiltle from "../components/Tiltle";
import VoltarAoTopo from "../components/VoltaaoTopo";

const cloudName = "dqhypftku"; // seu Cloudinary cloud name

function Portifolio() {
  const [videos, setVideos] = useState([]);
  const [cursors, setCursors] = useState([null]); // histórico de cursores
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [nextCursor, setNextCursor] = useState(null);

  const loadVideos = (cursor) => {
    setLoading(true);
    fetch(`https://videomaker-api-x2c8.onrender.com/api/videos${cursor ? `?next_cursor=${cursor}` : ""}`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.videos);
        setNextCursor(data.next_cursor);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    loadVideos(cursors[pageIndex]);
  },  [pageIndex, cursors]);

  const handleNext = () => {
    if (!nextCursor) return;

    setCursors((prev) => {
      const updated = prev.slice(0, pageIndex + 1);
      updated.push(nextCursor);
      return updated;
    });
    setPageIndex(pageIndex + 1);
  };

  const handlePrev = () => {
    if (pageIndex === 0) return;
    setPageIndex(pageIndex - 1);
  };

  return (
    <>
      <Navbar />
        <Tiltle name='PORTIFÓLIO' font='42px' />
     <div className="w-[90vw] m-auto p-4">
  <Load loading={loading} />

  {!loading && (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-15">
      {videos.map((publicId) => {
        const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${publicId}`;
        return (
          <video data-aos='fade-left'
            key={publicId}
            src={videoUrl}
            loading="lazy"
            controls
            className="w-full h-[350px] object-center rounded-lg shadow"
          />
        );
      })}
    </div>
    
  )}
   <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={pageIndex === 0 || loading}
            className="px-4 py-2 bg-[#C9A64D] rounded disabled:opacity-50"
          >
            Anterior
          </button>

          <button
            onClick={handleNext}
            disabled={!nextCursor || loading}
            className="px-4 py-2 bg-[#C9A64D] text-white rounded disabled:opacity-50"
          >
            Próximo
          </button>
        </div>
</div>
<footer className="flex flex-col lg:flex-row h-[100%] w-[100vw] justify-between items-center ">
        <div data-aos='fade-right' data-aos-delay='400' className="h-full">
          <img src="logo.webp" alt="logo videomaker" className="h-[50%]"/>
        </div>

        <div className="flex flex-col flex-1 lg:border-l-1 w-[100vw]">

         <div className="flex flex-col lg:flex-row justify-between items-center">  
          <p data-aos='fade-left' data-aos-delay='400' className="lg:flex-1 font-semibold text-4xl mb-7.5">let's work with ME</p>
          <div className="flex flex-col justify-center items-center flex-1 ">
            <p>+55 21 991373832</p>
            <p>stefannicb@gmail.com</p>
            <p >Rio de Janeiro | Brasil</p>
          </div>

          <img src="footer.webp" alt="imagem de um celular"  className="w-[40%] hidden lg:block "/></div>

          <div className="flex flex-row justify-between border-t-1 p-7" >
            <p className="text-[12px] text-left font-medium w-[25ch]">Copyright: © 2025 Stefanni Todos os direitos reservados.</p>
            
            <VoltarAoTopo/>

            <p className="text-[12px] w-[15ch] font-medium">
              Desenvolvido por{" "}
              <a href="https://mateuscelestinoportifolio.vercel.app/" className="underline">
                Mateus Celestino
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Portifolio;
