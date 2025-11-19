function Star({ filled = true }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-4 h-4 ${filled ? 'fill-yellow-400' : 'fill-blue-100'}`}>
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192z" />
    </svg>
  );
}

const REVIEWS = [
  {
    name: "Aarav S.",
    text: "Riddhi makes French feel easy and fun. I improved my speaking within weeks!",
  },
  {
    name: "Meera T.",
    text: "Her lessons are structured and interactive. I scored top grades in my finals.",
  },
  {
    name: "Ishaan K.",
    text: "Loved the practice activities and feedback. Highly recommend for DELF prep!",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950 text-center">Student Reviews</h2>
        <p className="mt-2 text-center text-blue-900/70">Real stories from learners who grew with us</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-blue-900/80">“{r.text}”</p>
              <div className="mt-4 font-semibold text-blue-900">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
