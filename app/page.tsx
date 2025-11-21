"use client"
import { Button } from "@/components/ui/button"
import { PlusIcon, TriangleIcon } from "lucide-react"
import Prism from "../components/Prism"

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden flex flex-col items-center justify-center relative">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20 flex flex-col items-center justify-between min-h-[700px] border border-white/10 backdrop-blur-sm">
        {/* Corner Plus Icons */}
        <PlusIcon className="absolute -top-3 -left-3 w-10 h-10 text-white/20" />
        <PlusIcon className="absolute -top-3 -right-3 w-10 h-10 text-white/20" />
        <PlusIcon className="absolute -bottom-3 -left-3 w-10 h-10 text-white/20" />
        <PlusIcon className="absolute -bottom-3 -right-3 w-10 h-10 text-white/20" />

        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Build and deploy on the AI Cloud.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more
            personalized web.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button className="bg-white text-black hover:bg-gray-200 h-12 px-20 rounded-full font-medium text-base">
              <TriangleIcon className="w-3 h-3 mr-2 fill-current" />
              Start Deploying
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 h-12 px-6 rounded-full font-medium text-base"
            >
              Get a Demo
            </Button>
          </div>
        </div>

        {/* Prism Background Element */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] w-full overflow-hidden -z-10 flex items-end justify-center">
          
          <Prism className="w-full max-w-4xl" />
          
        </div>
      </div>
    </div>
  )
}
