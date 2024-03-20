import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-borders";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'FuteraAI',
  description: 'Knoweldge Backed Intelligence',
  metadataBase: new URL('https://futera.vercel.app/'),
};
 
const words = "Tap into your workforce hidden potential and take productivity to levels unseen"

export default function Home() {
  return (
    
    <div className="h-dvh w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="text-center mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          FuteraAI <br />
        </h1>
        <TextGenerateEffect words={words} />
        <br />
        {/* This div now directly follows TextGenerateEffect to align the button just below */}
        <div>
          <Button
            borderRadius="2.75rem"
            className="bg-slate-100 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Coming Soon...
          </Button>
        </div>
      </div>
    </div>
  );
}

