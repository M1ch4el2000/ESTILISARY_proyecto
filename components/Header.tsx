import estilisary_logo from "../components/estilisary_logo.png";
import Image from "next/image";

export default function HeaderBP() {
    return (
        <header className="flex items-center justify-center bg-black min-h-28 p-4">
            <Image className="hover:shadow-lg transition duration-300 shadow-pink-400 rounded-full"
                src={estilisary_logo}
                width={100}
                height={100}
                alt="Logo Estilisary"
                title="Logo de Estilisary"
            />
        </header>
    );
}