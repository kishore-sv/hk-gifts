"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginPage() {
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        login(email, password);
        toast.warning("Login is not implemented yet.")
    }

    return (
        <div className="flex items-center justify-center min-h-svh">
            <div className="w-full max-w-sm space-y-4 border p-6 rounded-lg">
                <h2 className="text-xl font-bold">Login</h2>

                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button onClick={() => handleLogin()} className="w-full">
                    Login
                </Button>
                <div className="text-center text-sm mt-2">
                    <p>Don't have an account? <Link className="text-primary underline underline-offset-2" href="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}