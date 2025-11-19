export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">About French with Riddhi</h2>
            <p className="mt-4 text-blue-900/80">
              Hi! I’m Riddhi — a passionate French coach helping learners build a strong foundation and speak with confidence. My sessions are fully personalized, balancing grammar, vocabulary, and real-life conversation practice.
            </p>
            <ul className="mt-6 space-y-3 text-blue-900/80">
              <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-red-500 rounded-full" /> Flexible 1:1 and small-group options</li>
              <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-blue-600 rounded-full" /> Exam-oriented guidance (DELF/DALF, school & college syllabi)</li>
              <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-red-500 rounded-full" /> Interactive sessions with practical speaking drills</li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-blue-100 p-6 bg-gradient-to-br from-blue-50 to-red-50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-extrabold text-blue-900">96%</div>
                  <div className="text-blue-900/70">Exam success</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-900">200+</div>
                  <div className="text-blue-900/70">Happy learners</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-900">4.9</div>
                  <div className="text-blue-900/70">Average rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
