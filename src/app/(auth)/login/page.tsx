"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div>
      <h2>Login Page</h2>

      <Button
        onClick={() => {
          signIn("github", { redirectTo: "/dashboard" });
        }}
      >
        Sign In with Github
      </Button>

      <Button
        onClick={() => {
          signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        Sign In with Google
      </Button>
    </div>
  );
}
