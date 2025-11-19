import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    // In a future step, we can wire this to the backend
    setStatus(`Thanks ${data.name}! We'll reach out at ${data.email}.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950 text-center">Book a Free Trial</h2>
        <p className="mt-2 text-center text-blue-900/70">Tell us a bit about you and your goals</p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="level" placeholder="Current level (optional)" className="px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
          <textarea name="goals" placeholder="Your goals" rows={4} className="px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
          <button className="md:col-span-2 px-5 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">Send</button>
        </form>

        {status && (
          <div className="mt-6 max-w-2xl mx-auto rounded-xl border border-blue-200 bg-white p-4 text-blue-900/80">
            {status}
          </div>
        )}
      </div>
    </section>
  );
}
