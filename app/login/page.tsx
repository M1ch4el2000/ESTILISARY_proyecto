import Link from "next/link";

export default function LoginPage() {

    
    return (
        <main className="flex min-h-screen items-center justify-center bg-pink-50 p-4">
            <header>

            </header>
            <div className="w-full max-w-md rounded-sm bg-white p-8 shadow-lg">
                {/* Encabezado */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Bienvenida a Estilisary!
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Inicio de sesión
                    </p>
                </div>

                {/* Formulario */}
                <form className="space-y-4">
                    <div>
                        <label
                            htmlFor="phone_number"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Número de celular
                        </label>
                        <input
                            id="phone_number"
                            name="phone_number"
                            type="tel"
                            placeholder="Ej: 300 123 4567"
                            required
                            className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                        />
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="****"
                            required
                            className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200">
                        </input>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-sm bg-pink-600 py-2.5 font-semibold text-white transition hover:bg-pink-700"
                    >
                        Continuar
                    </button>
                    <Link href="/register" className="text-black font-bold block w-full text-center">Registrarse</Link>
                </form>
            </div>
            <footer>

            </footer>
        </main>
    );
}