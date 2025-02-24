"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export const signInWithMagicLinkAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const supabase = await createClient();
    const origin = (await headers()).get("origin");

    if (!email) {
        return encodedRedirect(
          "error",
          "/get-started",
          "Email is required.",
        );
    }

    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          // set this to false if you do not want the user to be automatically signed up
          shouldCreateUser: true,
          emailRedirectTo: `${origin}/auth/callback`,
        },
    })

    if (error) {
        console.error(error.code + " " + error.message);
        return encodedRedirect("error", "/get-started", error.message);
      } else {
        return encodedRedirect(
          "success",
          "/get-started",
          "Thanks for signing up! Please check your email for a verification link.",
        );
    }
};


export const signOutAction = async () => {
    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect("/get-started");
};