import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crosshair, Eye, MoonStar, Radar } from "lucide-react"

const prompt =
  "A suspenseful movie scene featuring the character. The character is hiding in the shadows, adjusting a precision optical device. Cut to a view through a circular glass scope with measurement markings overlay looking at a target from a distance. Intense focus, ominous vibe, highly detailed, 4k resolution, cinematic lighting."

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(91,120,154,0.28),transparent_40%),linear-gradient(120deg,rgba(8,10,14,1)_5%,rgba(15,19,26,0.95)_45%,rgba(7,9,12,1)_95%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92),rgba(0,0,0,0.45),rgba(0,0,0,0.85))]" />

        <div className="absolute left-[7%] top-1/2 hidden h-[58vh] w-[18vw] max-w-[230px] -translate-y-1/2 rounded-r-[80px] border-r border-white/10 bg-black/45 blur-[1px] md:block" />

        <div className="relative z-10 grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <Badge className="border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">Suspenseful Scene — Regenerated</Badge>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Hidden in shadow, dialing in a precision scope.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
              The shot transitions into a circular glass sightline with etched range marks, isolating a distant target.
              Cinematic darkness, focused intent, and ominous stillness drive the frame.
            </p>
            <p className="max-w-xl rounded-lg border border-white/10 bg-white/5 p-3 text-xs leading-relaxed text-zinc-300">
              {prompt}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                <MoonStar className="size-3.5" /> Ominous vibe
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                <Eye className="size-3.5" /> Intense focus
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                <Radar className="size-3.5" /> Scope telemetry
              </span>
            </div>
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
              Frame locked
            </Button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[460px] rounded-full border border-cyan-100/35 bg-[radial-gradient(circle,rgba(101,159,205,0.14)_0%,rgba(15,27,39,0.85)_45%,rgba(0,0,0,0.98)_100%)] shadow-[0_0_80px_rgba(64,153,206,0.15)]">
              <div className="absolute inset-4 rounded-full border border-cyan-100/25" />
              <div className="absolute inset-12 rounded-full border border-cyan-100/20" />
              <div className="absolute inset-[23%] rounded-full border border-cyan-100/15" />

              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-100/70 to-transparent" />
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-100/70 to-transparent" />

              <div className="absolute left-1/2 top-[14%] -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-cyan-100/80">
                range 630m
              </div>
              <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-cyan-100/80">
                wind 4.6 m/s
              </div>
              <div className="absolute left-[12%] top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.25em] text-cyan-100/70">
                x-12
              </div>
              <div className="absolute right-[12%] top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.25em] text-cyan-100/70">
                y+08
              </div>

              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-full border border-cyan-100/25 bg-black/35 p-4">
                  <Crosshair className="size-10 text-cyan-100/90" />
                </div>
              </div>

              <div className="absolute bottom-8 right-10 h-12 w-12 rounded-full border border-red-300/40 bg-red-500/20 blur-[1px]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
