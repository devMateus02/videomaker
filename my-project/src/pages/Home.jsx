import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Tiltle from "../components/Tiltle";
import Cards from "../components/Cards.jsx";
import { Link } from "react-router-dom";
import ExperienceCounter from "../components/ExperienceCounter";
import Typewriter from "typewriter-effect";
import LogoCarousel from "../components/carousel.jsx";
import FotoCarousel from "../components/Carousel-feed.jsx";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // pequeno atraso pra garantir que a seção existe
    }
  }, [location]);

  return (
    <>
     <div>
  <Navbar />
  <section 
    id="/" 
    className=" md:h-[90vh] flex md:pt-10 md:px-12 w-[100vw] pl-5 pr-5 pb-16"
  >
    <div className="flex flex-col-reverse justify-center items-center lg:items-center-safe lg:flex-row lg:justify-between  gap-15 md:gap-[18em] w-full">
      
      {/* Texto à esquerda */}
      <div 
        className=" flex-1 text-hero text-left max-w-[90%] md:max-w-none relative overflow-visible" 
        data-aos='fade-right' 
        data-aos-delay='300'
      >
        <h1 className="font-medium h-30 
        lg:h-35 text-2xl md:text-4xl w-[20ch] pb-7">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("OLÁ, ME CHAMO STEFANNI CARARINE, SUA NOVA VIDEOMAKER.")
                .start();
            }}
            options={{
              autoStart: true,
              loop: false,
              delay: 50,
            }}
          />
        </h1>

        <p className=" lg:w-[40ch] text-[rgba(255,255,255,0.45)] pb-10">
          “Vídeos estratégicos que valorizam sua marca e geram resultados”
        </p>
         
        <div className="flex flex-row flex-wrap gap-8 items-center justify-center lg:justify-start">
          <Link
          to="/portifolio"
          className="relative z-10 px-6 py-3 text-center
          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
          text-white font-semibold text-lg rounded-2xl 
          shadow-[0_0_12px_hsl(35,35%,51%)] 
          hover:scale-105 hover:brightness-125 
          hover:shadow-[0_0_24px_hsl(35,35%,60%)] 
          active:scale-105 active:brightness-125 
          active:shadow-[0_0_24px_hsl(35,35%,60%)] 
          transition-all duration-200
          before:absolute before:inset-0 before:rounded-2xl 
          before:animate-[ping_1.5s_ease-out_infinite] 
          before:bg-[hsl(35,35%,51%)] before:opacity-30"
        >
          PORTIFÓLIO
        </Link>

        <a href="https://wa.me/5521991373832?text=oi,%20tudo%20bem%20?%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços"  className="relative z-10 px-6 py-3 text-center
          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
          text-white font-semibold text-lg rounded-2xl 
          shadow-[0_0_12px_hsl(35,35%,51%)] 
          hover:scale-105 hover:brightness-125 
          hover:shadow-[0_0_24px_hsl(35,35%,60%)] 
          active:scale-105 active:brightness-125 
          active:shadow-[0_0_24px_hsl(35,35%,60%)] 
          transition-all duration-200
          before:absolute before:inset-0 before:rounded-2xl 
          before:animate-[ping_1.5s_ease-out_infinite] 
          before:bg-[hsl(35,35%,51%)] before:opacity-30" >Contate-me</a>
        </div>
      </div>

      {/* Imagem à direita */}
     <div 
  className="banner-hero mt-6 md:mt-0 relative" 
  data-aos="fade-left" 
  data-aos-delay="300"
>
  <div className="relative mx-auto md:mx-0">
    <img
      src="hero_banner.webp"
      alt="stefanni videomaker"
      className="relative w-[300px] h-[350px] z-[10]"
    />
    <img
      src="hero-baner.webp"
      alt=""
      className="relative w-[300px] h-[375px] -mt-[363px] -ml-[10px] z-[0]"
    />
  </div>
</div>
    </div>
  </section>
</div>


      <div className="bg-[rgb(56,54,54)] overflow-hidden">
        <section
          id="sobre"
          className="text-center p-[0_2em] flex flex-col items-center"
        >
          <Tiltle name="SOBRE MIM" />
          <div className=" flex flex-col-reverse w-[100vw] items-center justify-center gap-15 sm:flex-row sm:justify-around sm:items-stretch mt-18 mb-8 font-light">
            <div className="text-about text-left sm:w-[60%] p-5" data-aos='fade-right' data-aos-delay='350'>
              <p  data-aos='fade-right' data-aos-delay='300' className="sm:w-[39ch] indent-1">
                Olá! Sou Stefanni Cararine, tenho 24 anos, apaixonada por
                criação de conteúdo. Produtora audiovisual mobile, filmo e edito
                pelo celular.
                <span className="block mt-5 indent-1">
                  Trabalho com Aquarela Shoes desde 2018 e foi ai onde tudo
                </span>
                começou.
              </p>

              <p data-aos='fade-right' data-aos-delay='450' className="sm:w-[45ch] mt-5">
                Meu objetivo é criar e contar historias que geram conexões e
                resultados para marcas e pessoas.
              </p>

              <div data-aos='fade-right' data-aos-delay='650' className=" card-estudo flex flex-col justify-center bg-[#2F2F2F] w-[250px] h-[150px] rounded-4xl mt-8 mb-10 p-5">
                <img
                  src="faculdade.png"
                  alt="faculdade marketing"
                  className="w-[35px]"
                />
                <h4 className=" relative w-[15ch] font-semibold ml-8 text-[14px] before:content-['●'] before:absolute before:left-0 pl-4 mt-">
                  Formada em marketing
                </h4>
                <p className=" text-[12px] ml-12 pt-1 text-white/50">
                  UVA - Universidade Veiga de Almeida{" "}
                </p>
              </div>
            </div>
            <div data-aos= 'fade-left' data-aos-delay='350' className="banner-about">
              <img 
                src="banner-sobre.webp"
                alt="foto stefanni videomaker"
                className="w-[300px] lg:w-[350px]"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[rgb(232,228,228)] overflow-hidden">
        <section
          id="ajuda"
          className="flex flex-col justify-center items-center"
        >
          <Tiltle name="COMO POSSO TE AJUDAR" color="#686663" font="600" />
          <div className="text-[#2D2E30] w-[95%] lg:w-[100%] mt-20 mb-20">
            <div className="flex flex-col lg:flex-row flex-wrap gap-4 justify-center items-center font-semibold">
              <h4 className="text-[20px] lg:text-2xl lg:w-[15ch]"  data-aos='fade-right' data-aos-delay='150' >
                PLANEJAMENTO DE POSTAGEM E BRIEFING <span className="text-[20px] lg:hidden" >:</span>
              </h4>

              <p className="lg:hidden text-center font-medium"  data-aos='fade-right' data-aos-delay='450'>
                Alinharemos todos os objetivos da marca e prepararei um briefing
                com muitas ideias de conteúdos.
              </p>

              <img data-aos='fade-right' data-aos-delay='350'
                src="Arrow.png"
                alt="seta para a direita"
                className="w-[20%] lg:w-[8%] lg:animation-moveAndFade rotate-90 lg:rotate-0"
              />
              <h4 className="text-[20px] lg:text-2xl lg:w-[15ch]"  data-aos='fade-right' data-aos-delay='150'>CAPTAÇÂO E EDIÇÃO <span className="text-[20px] lg:hidden" >:</span></h4>

              <p className="lg:hidden text-center font-medium"  data-aos='fade-right' data-aos-delay='450'>
               Vamos marcar um dia para captar todos os conteúdos que serão
                feitos e editados por mim.</p>

              <img data-aos='fade-right' data-aos-delay='350'
                src="Arrow.png"
                alt="seta para a direita"
                className="w-[20%] lg:w-[8%] lg:animation-moveAndFade rotate-90 lg:rotate-0"
              />
              <h4 className="text-[20px] lg:text-2xl lg:w-[15ch]"  data-aos='fade-right' data-aos-delay='150'>RESULTADO E ENTREGA <span className="text-[20px] lg:hidden" >:</span></h4>

              <p className="lg:hidden text-center font-medium "  data-aos='fade-right' data-aos-delay='450'>
                Você terá conteúdos para postar sem preocupação{" "}
                <span className="underline">durante todo mês</span> e com toda
                qualidade e agilidade que precisa.</p>
            </div>

            <hr className="hidden lg:block w-[100vw] m-[4em_0]" />

            <div className="hidden  lg:flex flex-row justify-center gap-35">
              <p className="lg:w-[26ch] text-left font-medium"  data-aos='fade-right' data-aos-delay='450'>
                Alinharemos todos os objetivos da marca e prepararei um briefing
                com muitas ideias de conteúdos.
              </p>
              <p className="lg:w-[20ch] text-left font-medium mr-5"  data-aos='fade-right' data-aos-delay='450'>
                Vamos marcar um dia para captar todos os conteúdos que serão
                feitos e editados por mim.
              </p>
              <p className="lg:w-[18ch] text-left font-medium "  data-aos='fade-right' data-aos-delay='450'>
                Você terá conteúdos para postar sem preocupação{" "}
                <span className="underline">durante todo mês</span> e com toda
                qualidade e agilidade que precisa.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[rgb(22,21,21)] ">
        <section
          id="servicos"
          className="flex flex-col justify-center items-center"
        >
          <Tiltle name="MEUS SERVIÇOS" />
          <div className="flex flex-row flex-wrap justify-center items-center gap-1 lg:gap-7 w-[100%] lg:w-[75%]">
            <Cards delay='400' name="Criação de conteúdo para REELS" />
            <Cards delay='500' name="Criação de conteúdo para stories" />
            <Cards delay='600' name="Edição e captação de conteúdos" />
            <Cards delay='700'name="Gerenciamento de redes sociais" />
            <Cards delay='800'name="Cobertura de eventos em tempo real" />
            <div data-aos='fade-down' data-aos-delay='900' className="lg:hidden w-[160px] h-[160px] flex flex-col justify-center items-center">
                <h4>
                  <ExperienceCounter />
                </h4>
                <p className="text-white/50">anos de experiências</p>
              </div>
            <FotoCarousel delay='850'/>
            <div data-aos='fade-down' delay='950' className="experience">
              <div className=" hidden w-[250px] h-[160px] lg:flex flex-col justify-center items-center">
                <h4>
                  <ExperienceCounter />
                </h4>
                <p className="text-white/50">anos de experiências</p>
              </div>
            </div>
          </div>
        </section>
        <LogoCarousel delay='1050' />
      </div>
      <div className="bg-[rgb(56,54,54)] overflow-hidden">
        <section id="contato" className="flex flex-col justify-center items-center">
          <Tiltle name='ENTRE EM CONTATO'/>
          <div className="flex flex-col items-center p-[0px_15px] gap-6 lg:flex-row justify-around w-[100%] mt-15 lg:mt-20 mb-20">
           
          <div data-aos='fade-left' data-aos-delay='300' className="flex flex-col justify-center text-left  w-[300px] h-[100%] bg-[#2F2F2F] pt-16  pb-16 pl-10 rounded-4xl ">

            <h5 data-aos='fade-left' data-aos-delay='450' className=" font-semibold">Celular:</h5>
            <p data-aos='fade-left' data-aos-delay='500' className="font-light mt-4 mb-4">+55 21 99137-3832</p>

            <h5 data-aos='fade-left' data-aos-delay='550' className=" font-semibold">Email:</h5>
            <p data-aos='fade-left' data-aos-delay='600' className="font-light mt-4 mb-4">stefannicb@gmail.com</p>
          </div>
          </div>
        </section>
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

export default Home;
