'use server'

import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";
import { ReactJsxRuntime } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints";
import { redirect } from "next/navigation"
import { cookies } from "next/headers";
import { userAgentFromString } from "next/server";

export type LoginState = {
    error: string;
}

export async function LoginUser(prevstate: LoginState, formData: FormData): Promise<LoginState> {
    const sql = neon(process.env.DATABASE_URL!);
    const PHONE_NUMBER = (formData.get("phone_number") as string)?.trim();
    const PASSWORD = formData.get("password") as string;

    if (!PHONE_NUMBER || !PASSWORD) {
        return { error: "Debe introducir su información" };
    }

    try {
        const RESULT = await sql
            `SELECT id, password
        FROM users
        WHERE phone_number = ${PHONE_NUMBER}
        LIMIT 1`;

        const USER = RESULT[0];

        if (!USER) {
            return { error: "Usuario no existe" };
        }

        const VERIFY_PASSWORD = await bcrypt.compare(PASSWORD, USER.password);
        if (!VERIFY_PASSWORD) {
            return { error: "Contraseña incorrecta" };
        }
        const COOKIE_STORE = await cookies();
        COOKIE_STORE.set("session_user", JSON.stringify({
            id: USER.id,
            first_name: USER.first_name,
            rol: USER.rol
        }),
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24 * 7,
                path: "/",
            }
        );
    } catch (error){
        return {error: "Ocurrió un error al intentar iniciar sesión"}
    }

    console.log("SESIÓN INICIADA");
    return { error: "" };
}