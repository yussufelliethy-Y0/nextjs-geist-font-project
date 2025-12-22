import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  Activity,
  Aperture,
  Crosshair,
  MoonStar,
  ScanEye,
  Target,
} from "lucide-react"

const prompt =
  "A suspenseful movie scene featuring the character. The character is hiding in the shadows, adjusting a precision optical device. Cut to a view through a circular glass scope with measurement markings overlay looking at a target from a distance. Intense focus, ominous vibe, highly detailed, 4k resolution, cinematic lighting."

const focusMetrics = [
  { label: "Calibration", value: 0.92 },
  { label: "Stability", value: 0.88 },
  { label: "Focus Depth", value: 0.95 },
]

const telemetry = [
  {
    title: "Shadow Setup",
    description:
      "Cloaked beside a ribbed wall, the operative dials in the optics while keeping a low profile.",
    icon: MoonStar,
    details: [
      "Body pressed into cover with shoulders relaxed",
      "Gloved hand turning the precision dial",
      "Breath measured to keep the scope steady",
    ],
  },
  {
    title: "Through the Glass",
    description:
      "A circular scope view, measurement marks glowing while the target remains centered in the distance.",
    icon: Crosshair,
    details: [
      "Floating reticle with distance ticks",
      "Soft parallax blur at the glass edge",
      "Warm light on the horizon cutting through haze",
    ],
  },
]

const callouts = [
  {
    label: "Atmosphere",
    text: "Ominous and cinematic with razor-sharp highlights.",
    icon: Aperture,
  },
  {
    label: "Resolution",
    text: "4K clarity with crisp metal textures and foggy depth cues.",
    icon: ScanEye,
  },
  {
    label: "Intent",
    text: "Singular focus on the target framed inside measurement overlays.",
    icon: Target,
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/80 to-background px-6 py-12 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="space-y-4">
          <Badge variant="secondary" className="uppercase tracking-[0.2em]">
            Scene study
          </Badge>
          <div className="space-y-2">
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Suspenseful vantage sequence
            </h1>
            <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
              A covert operative waits in the dark, finely adjusting a precision optic before zeroing in on a distant
              target. Every element—lighting, measurements, and tension—serves the shot.
            </p>
          </div>
          <Card className="bg-card/80 backdrop-blur">
            <CardHeader className="gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Aperture className="size-4" />
                Visual prompt
              </div>
              <CardDescription className="text-base leading-relaxed text-foreground/90">
                {prompt}
              </CardDescription>
            </CardHeader>
          </Card>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Card className="border-primary/10 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Target className="size-4" />
                Shot construction
              </div>
              <CardTitle className="text-2xl">Layered blocking</CardTitle>
              <CardDescription>Foreground cover, mid-frame scope, and distant subject aligned in one axis.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-muted/60 via-card to-background p-6 shadow-inner">
                  <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.25),transparent_55%)]" />
                  </div>

                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <MoonStar className="size-4" />
                      Shadow position
                    </div>
                    <h2 className="text-xl font-semibold leading-tight">
                      Operative adjusts the optic from cover
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Camera tracks from behind, framing shoulders and gloved hands while the dial turns with a soft
                      metallic click. Only a ribbon of light brushes the cheekbone.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {callouts.map(({ label, text, icon: Icon }) => (
                        <div key={label} className="flex items-start gap-3 rounded-lg border bg-background/70 p-3 shadow-sm">
                          <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Icon className="size-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                            <p className="text-sm leading-relaxed text-foreground/90">{text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative mx-auto aspect-square w-full max-w-sm">
                    <div className="absolute inset-0 rounded-full border border-primary/40 bg-gradient-to-b from-background via-card to-background shadow-[0_20px_60px_-35px_rgba(0,0,0,0.6)]" />
                    <div className="absolute inset-6 rounded-full border border-primary/30" />
                    <div className="absolute inset-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                    <div className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/70 to-transparent" />
                    <div className="absolute inset-12 rounded-full border border-primary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-3 shadow-inner">
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                          <Crosshair className="size-4" />
                          Distance: 630m
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Target locked</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-4 -translate-x-1/2 text-xs uppercase tracking-wide text-muted-foreground">
                      wind 4.6m/s
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-wide text-muted-foreground">
                      elevation +02.4
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {focusMetrics.map(({ label, value }) => (
                      <div key={label} className="space-y-2 rounded-lg border bg-background/80 p-3">
                        <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                          <span>{label}</span>
                          <span className="text-foreground">{Math.round(value * 100)}%</span>
                        </div>
                        <Progress value={value * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/90 backdrop-blur">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Activity className="size-4" />
                Shot notes
              </div>
              <CardTitle className="text-2xl">Storyboard beats</CardTitle>
              <CardDescription>Two cuts that carry the tension from setup to sightline.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {telemetry.map(({ title, description, icon: Icon, details }, index) => (
                <div key={title} className={cn("rounded-xl border p-4", index === 0 ? "bg-muted/40" : "bg-background/80") }>
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Icon className="size-4" />
                        {title}
                      </div>
                      <p className="text-foreground/90 text-sm leading-relaxed">{description}</p>
                    </div>
                    <Badge variant="outline" className="text-xs font-semibold">
                      Cut {index + 1}
                    </Badge>
                  </div>
                  <Separator className="my-3" />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {details.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[6px] size-1.5 rounded-full bg-primary/70" aria-hidden />
                        <span className="leading-relaxed text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
