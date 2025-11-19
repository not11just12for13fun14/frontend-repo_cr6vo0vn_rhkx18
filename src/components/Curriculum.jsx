export default function Curriculum() {
  const levels = [
    {
      title: "Beginner (A1-A2)",
      color: "from-blue-50 to-white",
      items: ["Basics & pronunciation", "Everyday vocabulary", "Simple grammar"],
    },
    {
      title: "Intermediate (B1)",
      color: "from-white to-red-50",
      items: ["Complex sentences", "Listening drills", "Writing practice"],
    },
    {
      title: "Advanced (B2+)",
      color: "from-red-50 to-blue-50",
      items: ["Debates & presentations", "Exam prep (DELF/DALF)", "Native-level resources"],
    },
  ];

  return (
    <section id="curriculum" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950 text-center">Curriculum</h2>
        <p className="mt-2 text-center text-blue-900/70">A structured path to fluency</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {levels.map((lvl) => (
            <div key={lvl.title} className={`rounded-2xl border border-blue-100 bg-gradient-to-br ${lvl.color} p-6`}>
              <div className="text-xl font-semibold text-blue-900">{lvl.title}</div>
              <ul className="mt-4 space-y-2 text-blue-900/80">
                {lvl.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 rounded-full bg-red-500" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
