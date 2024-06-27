import api from "@/lib/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IUserAuth } from "./types";

async function signIn(data: FormData) {
  "use server";
  const userAuth: IUserAuth = await api
    .post("/api/auth/signin", {
      email: data.get("email"),
      password: data.get("password"),
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("User not found.");
    });

  if (!userAuth) {
    throw new Error("User not found.");
  }
  cookies().set("nextauth.token", userAuth.token);
  cookies().set(
    "nextauth.user",
    JSON.stringify({
      email: userAuth.email,
      username: userAuth.username,
      roles: userAuth.roles,
      permissions: userAuth.permissions,
      ability: userAuth.ability,
    })
  );
  cookies().set("nextauth.refreshtoken", userAuth.token);
  redirect("/");
}

export { signIn };
