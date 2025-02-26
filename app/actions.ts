"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";



export const signInActionWithGoogle = async () => {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  if (data.url) {
    return redirect(data.url);
  }
};


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

  const { error } = await supabase.auth.signInWithOtp({
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
      "Thanks! Please check your email for a verification link to continue.",
    );
  }
};


export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/get-started");
};