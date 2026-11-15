'use server'

import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation"

export async function RegisterUser(formData: FormData) {
    console.log("Entrada a servidor ACTION REGISTRO");

    const sql = neon(process.env.DATABASE_URL!);
    const FIRST_NAME = formData.get("first_name") as string;
    const LAST_NAME = formData.get("last_name") as string;
    const PHONE_NUMBER = formData.get("phone_number") as string;
    const PASSWORD = formData.get("password") as string;
    const CONFIRM_PASSWORD = formData.get("confirm_password") as string;

    console.log("Datos recibidos", {FIRST_NAME, LAST_NAME, PHONE_NUMBER})

    if (PASSWORD !== CONFIRM_PASSWORD) {
        throw new Error("La contraseña no coincide");
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
        throw new Error("No se pudo completar el registro, verifique sus datos");
    }
    redirect("/login");
}