'use server'

import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";
import { ReactJsxRuntime } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints";
import { redirect } from "next/navigation"

export async function RegisterUser(prevstate: {error: string} | null, formData: FormData) {
    console.log("Entrada a servidor ACTION REGISTRO");

    const sql = neon(process.env.DATABASE_URL!);
    const FIRST_NAME = (formData.get("first_name") as string)?.trim();
    const LAST_NAME = (formData.get("last_name") as string)?.trim();
    const PHONE_NUMBER = (formData.get("phone_number") as string)?.trim();
    const PASSWORD = (formData.get("password") as string)?.trim();
    const CONFIRM_PASSWORD = (formData.get("confirm_password") as string)?.trim();

    if(!FIRST_NAME || !LAST_NAME || !PHONE_NUMBER || !PASSWORD || !CONFIRM_PASSWORD){
        return {error: "Todos los campos son obligatorios"};
    }

    console.log("Datos recibidos", {FIRST_NAME, LAST_NAME, PHONE_NUMBER})

    if (PASSWORD !== CONFIRM_PASSWORD) {
        return {error: "La contraseña no coincide"};
        
    }
    try {
        const HASHED_PASSWORD = await bcrypt.hash(PASSWORD, 10);
        await sql`
        INSERT INTO users (first_name, last_name, phone_number, rol, password)
        VALUES (${FIRST_NAME}, ${LAST_NAME}, ${PHONE_NUMBER}, ${"client"}, ${HASHED_PASSWORD})
        `;
    }
    catch (error) {
        console.error("Error al registrar usuario: ", error);
        return {error: "No se pudo crear el usuario, verifique los datos"}
    }
    redirect("/login");
}