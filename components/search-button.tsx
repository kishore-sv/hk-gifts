"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";

export default function SearchButton() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(!open)} variant="outline" className="cursor-pointer text-foreground hover:text-primary"><Search /></Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="min-h-[60vh] min-w-[60vw]">
                    <DialogHeader>
                        <DialogTitle>Search</DialogTitle>
                        <div className="my-4">
                            <Input placeholder="Search for products" />
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}