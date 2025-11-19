export default function Growth() {
  const items = [
    { label: "Vocabulary", value: 78 },
    { label: "Grammar", value: 85 },
    { label: "Speaking", value: 92 },
    { label: "Listening", value: 88 },
  ];

  return (
    <section id="growth" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950 text-center">Student Growth</h2>
        <p className="mt-2 text-center text-blue-900/70">Track progress across core skills</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {items.map((it) => (
              <div key={it.label}>
                <div className="flex justify-between text-sm text-blue-900/70">
                  <span>{it.label}</span>
                  <span>{it.value}%</span>
                </div>
                <div className="h-3 rounded-full bg-blue-100 overflow-hidden border border-blue-200">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-red-500"
                    style={{ width: `${it.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-blue-100 p-6 bg-gradient-to-br from-blue-50 to-red-50">
            <ul className="space-y-3 text-blue-900/80">
              <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-blue-600 rounded-full" /> Personalized progress plans</li>
              <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-red-500 rounded-full" /> Regular assessments & feedback</li>
              <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-blue-600 rounded-full" /> Visual dashboards to motivate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
