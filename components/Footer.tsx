import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaW } from "react-icons/fa6";
import Image from "next/image";
import estilisary_logo from "../components/estilisary_logo.png"

export default function FooterBP() {
    return (
        <footer className="w-full min-h-28 flex justify-between items-center p-4 bg-black">
            <div className="flex flex-col items-center justify-center w-full space-y-4">
                <p className="text-center">Comunícate conmigo:</p>
                <FaWhatsapp className="text-pink-700 transition hover:text-pink-400 hover:scale-105 duration-300 size-7" />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <Image className="hover:shadow-lg transition duration-300 shadow-pink-400 rounded-full"
                    src={estilisary_logo}
                    width={100}
                    height={100}
                    alt="Estilisary logo"
                    title="Logo de Estilisary"
                />
            </div>
            <div className="flex flex-col justify-center items-center w-full space-y-4">
                <p className="text-white text-center">Mis redes sociales:</p>
                <div className="flex w-full justify-center gap-8 items center">
                    <a href="https://www.tiktok.com/@estilisary" target="_blank" rel="noopener noreferrer"><FaTiktok  className="text-pink-700 transition hover:text-pink-400 hover:scale-105 duration-300 size-7"/></a>
                    <a href="https://www.instagram.com/estilisary/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-pink-700 transition hover:text-pink-400 hover:scale-105 duration-300 size-7"/></a>
                    
                </div>
            </div>
        </footer>
    );
}