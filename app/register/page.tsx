'use client'
import Link from "next/link";
import { RegisterUser } from "./actions";
import { useActionState } from "react";

export default function RegisterPage() {
    const [state, formAction, isPending] = useActionState(RegisterUser, { error: "" });
    return (
        <main className="flex min-h-screen items-center justify-center bg-pink-50 p-4">
            <section className="w-full max-w-md rounded-sm bg-white p-8 shadow-lg">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Formulario de registro
                    </h1>
                </div>

                {/*Formulario de registro*/}
                <form action={formAction} className="flex flex-col items-center justify-center space-y-4">
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
                                required
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition duration-300"
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
                                required
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition duration-300"
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
                                required
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition duration-300"
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
                                required
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition duration-300" />
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
                                required
                                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition duration-300" />
                        </div>
                        {/*Mensaje coincidencia*/}
                        <div className="w-full max-w-xs">
                            <p
                                id="noMatch"
                                className="block items-center justify-center text-red-500">
                                {state?.error}
                            </p>
                        </div>
                        {/*Botón registrar*/}
                        <div className="w-full max-w-xs">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full rounded-sm bg-pink-600 py-2.5 font-semibold text-white transition hover:bg-pink-700 duration-300"
                            >
                                {isPending ? "Registrando..." : "Registrarse"}
                            </button>
                        </div>
                        <div className="w-full max-w-xs">
                            <Link href="/login" className="text-gray-700 w-full block text-center font-bold hover:text-pink-700 transition-colors duration-300">Volver</Link>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
}
