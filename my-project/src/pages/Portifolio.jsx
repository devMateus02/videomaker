import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Load from "../components/Load";
import Tiltle from "../components/Tiltle";

const cloudName = "dqhypftku"; // seu Cloudinary cloud name

function Portifolio() {
  const [videos, setVideos] = useState([]);
  const [cursors, setCursors] = useState([null]); // histórico de cursores
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [nextCursor, setNextCursor] = useState(null);

  const loadVideos = (cursor) => {
    setLoading(true);
    fetch(`http://localhost:4000/api/videos${cursor ? `?next_cursor=${cursor}` : ""}`)
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
    </>
  );
}

export default Portifolio;
