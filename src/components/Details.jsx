export default function Details() {
  return (
    <section id="details" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950 text-center">More Details</h2>
        <p className="mt-2 text-center text-blue-900/70">Everything you need to get started</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-blue-100 p-6">
            <div className="text-lg font-semibold text-blue-900">Class Formats</div>
            <ul className="mt-3 space-y-2 text-blue-900/80">
              <li>1:1 private sessions</li>
              <li>Small group batches (3-5)</li>
              <li>Online via Zoom/Meet</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-100 p-6">
            <div className="text-lg font-semibold text-blue-900">Pricing</div>
            <ul className="mt-3 space-y-2 text-blue-900/80">
              <li>Flexible monthly plans</li>
              <li>Discounts for students</li>
              <li>First session free</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-100 p-6">
            <div className="text-lg font-semibold text-blue-900">Resources</div>
            <ul className="mt-3 space-y-2 text-blue-900/80">
              <li>Custom worksheets</li>
              <li>Audio practice decks</li>
              <li>Homework support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
