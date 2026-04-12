"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";

export default function RegisterPage() {
    const { register } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleRegister() {
        register(name, email, password);
        toast.warning("Register is not implemented yet.")
    }

    return (
        <div className="flex items-center justify-center min-h-svh">
            <div className="w-full max-w-sm space-y-4 border p-6 rounded-lg">
                <h2 className="text-xl font-bold">Register</h2>

                <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                <Button onClick={handleRegister} className="w-full">
                    Register
                </Button>

                <div className="text-center text-sm mt-2">
                    <p>Already have an account? <Link className="text-primary underline underline-offset-2" href="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
}