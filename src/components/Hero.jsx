export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(239,68,68,0.08),transparent_40%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Personalized French coaching
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-950">
              Learn French with confidence
            </h1>
            <p className="mt-4 text-blue-900/80 text-lg">
              Private classes tailored to your goals — from exam prep to fluent conversation.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="px-5 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
                Book a free trial
              </a>
              <a href="#curriculum" className="px-5 py-3 rounded-full border border-blue-300 text-blue-900 hover:bg-blue-50">
                See curriculum
              </a>
            </div>
            <div className="mt-6 text-sm text-blue-900/70">
              🇫🇷 Red • White • Blue theme with a warm, welcoming touch
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-red-50 border border-blue-100 p-3">
              <div className="w-full h-full rounded-xl bg-white grid grid-cols-3 gap-2 p-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-gradient-to-br from-blue-50 to-red-50 border border-blue-100" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
