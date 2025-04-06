"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h2>Dashboard</h2>

      {session?.user ? (
        <>
          <div>Welcome {session?.user.name}</div>
          <Button onClick={() => signOut()}>Logout</Button>
        </>
      ) : (
        <div>
          <h3>Please, Login</h3>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
