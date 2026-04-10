import { Button } from "./ui/button";

export default function WhatsappButton() {
    return (
        <div className="fixed bottom-10 left-10 z-50">
            <a href="https://wa.me/917760220979" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="cursor-pointer bg-green-500 hover:bg-green-600">
                    <WhatsAppIcon /> Order on WhatsApp
                </Button>
            </a>
        </div>
    )
}

export function WhatsAppIcon({ props }: { props?: React.SVGProps<SVGSVGElement> }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" className="size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
    )
}