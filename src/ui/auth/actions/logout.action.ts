// TODO: Debo crear una utilidad para solo la logica de las cookies
// TODO: Debo pasar el almacenamiento de datos de las cookies usando un modulo con un repositorio de implementacion

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
  cookieStore.delete("user_data");

  redirect("/login");
}
