import React from "react";
import Navbar from "../components/Navbar";
import Tiltle from "../components/Tiltle";


function Portifolio(){
    return (
        <>
        <Navbar />
         <main>
               <Tiltle name='PORTIFÓLIO' />
         </main>
           <footer className="flex flex-col lg:flex-row h-[100%] w-[100vw] justify-between items-center ">
        <div data-aos='fade-right' data-aos-delay='400' className="h-full">
          <img src="logo.webp" alt="logo videomaker" className="h-[50%]"/>
        </div>

        <div className="flex flex-col flex-1 lg:border-l-1 w-[100vw]">

         <div className="flex flex-col lg:flex-row justify-between items-center">  
          <p data-aos='fade-left' data-aos-delay='400' className="lg:flex-1 font-semibold text-4xl mb-7.5">let's work with ME</p>
          <div className="flex flex-col justify-center items-center flex-1 ">
            <p data-aos='fade-right' data-aos-delay='500'>+55 21 991373832</p>
            <p data-aos='fade-left' data-aos-delay='550'>stefannicb@gmail.com</p>
            <p>Rio de Janeiro | Brasil</p>
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
    )
}

export default Portifolio