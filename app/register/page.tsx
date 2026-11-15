import Link from "next/link";
import { RegisterUser } from "./actions";

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-pink-50 p-4">
            <section className="w-full max-w-md rounded-sm bg-white p-8 shadow-lg">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Formulario de registro
                    </h1>
                </div>

                {/*Formulario de registro*/}
                <form action = {RegisterUser} className="flex flex-col items-center justify-center space-y-4">
                    <div className=" w-full flex flex-col items-center justify-center space-y-3">
                        {/*Nombre*/}
                        <div className="w-full max-w-xs">
                            <label
                                htmlFor="first_name"
                                className="text-gray-700 block font-medium text-sm">
                                Nombre
                            </label>
                            <input
                                id="first_name"
                                name="first_name"
                                type="text"
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                            />
                        </div>
                        {/*Apellido*/}
                        <div className="w-full max-w-xs">
                            <label
                                className="text-gray-700 block font-medium text-sm"
                                htmlFor="last_name">
                                Apellido
                            </label>
                            <input
                                id="last_name"
                                name="last_name"
                                type="text"
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                            />
                        </div>
                        {/*Número de teléfono*/}
                        <div className="w-full max-w-xs">
                            <label
                                htmlFor="phone_number"
                                className="text-gray-700 block font-medium text-sm">
                                Número de teléfono
                            </label>
                            <input
                                id="phone_number"
                                name="phone_number"
                                type="text"
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                            />
                        </div>
                        {/*Contraseña*/}
                        <div className="w-full max-w-xs">
                            <label
                                htmlFor="password"
                                className="text-gray-700 block font-medium text-sm">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200" />
                        </div>
                        {/*Confirmar contraseña*/}
                        <div className="w-full max-w-xs">
                            <label
                                htmlFor="confirm_password"
                                className="text-gray-700 block font-medium text-sm">
                                Confirmar contraseña
                            </label>
                            <input
                                id="confirm_password"
                                name="confirm_password"
                                type="password"
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200" />
                        </div>
                        {/*Botón registrar*/}
                        <div className="w-full max-w-xs">
                            <button
                                type="submit"
                                className="w-full rounded-sm bg-pink-600 py-2.5 font-semibold text-white transition hover:bg-pink-700"
                            >
                                Registrarse
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
}
