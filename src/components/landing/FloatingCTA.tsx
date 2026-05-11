import { useEffect, useState } from "react";
import { GradientButton } from "./GradientButton";
import { navCTA } from "@/data/content";

export const FloatingCTA = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500 max-w-[200px] sm:max-w-xs ${show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
                }`}
        >
            <div className="bg-surface/90 backdrop-blur-md border border-border/80 shadow-2xl rounded-2xl p-1.5 flex items-center gap-2 ring-1 ring-brand-blue/10">
                <GradientButton asChildHref={navCTA.href} size="md" className="w-full text-xs sm:text-sm px-3 py-2 shadow-lg shadow-brand-blue/20">
                    Amankan Kuota
                </GradientButton>
            </div>
        </div>
    );
};
