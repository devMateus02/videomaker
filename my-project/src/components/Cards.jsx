import React from "react";

function Cards(props) {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay={props.delay}
      className="relative flex flex-col items-start bg-[#1b1a1a] w-[160px] sm:w-[250px] h-[160px] rounded-4xl mt-8 mb-10 p-5 overflow-hidden"
    >
      <div>
        <img src="globo.png" alt="icone de globo" className="w-[25px] lg:mt-2" />
        <h4 className="relative lg:w-[20ch] font-semibold lg:ml-2 pl-5 text-[14px] text-left before:content-['●'] before:absolute before:left-0 mt-4">
          {props.name}
        </h4>
      </div>

      {/* botão fixado no canto inferior direito do card */}
      <a
        href={`https://wa.me/5521991373832?text=oi,%20tudo%20bem?%20gostaria%20de%20contratar%20este%20serviço:%20${encodeURIComponent(
          props.name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute group hover:scale-[1] bg-[rgba(141,136,136,0.5)] p-3 w-[45px] h-[50px] rounded-2xl bottom-[-10px] right-[-10px]"
      >
        <img
          src="enviar.png"
          alt="botão enviar"
          className="absolute transition-all duration-200 ease-in group-hover:scale-[1.2] top-2.5 left-2 w-[20px]"
        />
      </a>
    </div>
  );
}

export default Cards;
