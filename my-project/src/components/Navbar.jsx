import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [openLab, setOpenLab] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="flex items-center flex-row-reverse justify-between p-[0_2em] relative z-50 w-full">
      {/* LOGO */}
      <Link
        data-aos="fade-left"
        data-aos-anchor-placement="center-center"
        to="/"
      >
        <img
          className="h-[100px]"
          src="logo.webp"
          alt="logo stefanni videomaker"
        />
      </Link>

      {/* BOTÃO HAMBURGUER */}
      <button
        className="md:hidden z-50  bg-[#1e1e1e] relative p-5 rounded-2xl cursor-pointer transition duration-75 ease-in-out
                before:content-[''] before:absolute before:w-7 before:h-[5px] before:border before:rounded-2xl 
                before:left-[6px] before:top-[12px] before:bg-transparent 
                after:content-[''] after:absolute after:w-7 after:h-[5px] after:border after:rounded-2xl 
                after:left-[6px] after:top-[22px] after:bg-transparent 
                hover:before:bg-white hover:after:bg-white
                active:before:bg-white active:after:bg-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        alt='botao de menu'
      ></button>

      {/* MENU RESPONSIVO */}
      <div
        className={`absolute top-0 left-0 w-full bg-[#1e1e1e] p-6 rounded-b-3xl transition-all duration-300 z-40 
        md:static md:w-auto md:p-0 md:bg-transparent md:rounded-none
        ${
          mobileOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto"
        }
      `}
      >
        <ul className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-6 md:gap-2.5 text-center w-full">
          {/* Botão de contato rápido */}
          <li className="relative opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto ">
            <button alt='botao de menu'
              onClick={() => setOpenLab(!openLab)}
              className="relative p-4 cursor-pointer transition duration-75 ease-in-out
                before:content-[''] before:absolute before:w-7 before:h-[5px] before:border before:rounded-2xl 
                before:left-[2px] before:top-[8px] before:bg-transparent 
                after:content-[''] after:absolute after:w-7 after:h-[5px] after:border after:rounded-2xl 
                after:left-[2px] after:top-[18px] after:bg-transparent 
                hover:before:bg-white hover:after:bg-white
                active:before:bg-white active:after:bg-white"
            ></button>

            <div
              className={`absolute top-[60px] left-0 w-[250px] bg-[#1E1E1E] p-6 rounded-3xl transition-all duration-300 ease-in-out z-50 
                ${
                  openLab
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }
              `}
            >
              <div className="text-left ">
                <p className="font-medium">Celular:</p>
                <p className="text-[rgba(255,255,255,60%)]">
                  +55 21 99137-3832
                </p>
              </div>
              <div className="text-left mt-4">
                <p className="font-medium">Email:</p>
                <p className="text-[rgba(255,255,255,60%)]">
                  stefannicb@gmail.com
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.instagram.com/stefannicararine/"
                  target="_blank"
                >
                  <img
                    className="w-[15px] transition duration-200 ease-in-out hover:scale-[1.5] active:scale-[1.5]"
                    src="instagram.png"
                    alt="logo instagram videomaker"
                  />
                </a>
              </div>
            </div>
          </li>

          {/* Links */}
          {[
            ["/", "HOME"],
            ["/#sobre", "SOBRE"],
            ["/#ajuda", "AJUDA"],
            ["/#servicos", "SERVIÇOS"],
            ["/#contato", "CONTATOS"],
            ["/portifolio", "PORTIFÓLIO"],
          ].map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setMobileOpen(false)}
                className="nav-link"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
