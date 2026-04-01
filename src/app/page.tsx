export const metadata = {
  title: "Express Concepts, Coding Practice & Projects",
  description:
    "Learn ExpressJS concepts with clear explanations, real-world examples, and practical projects.",
};


export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-600">
          Learn ExpressJS the Right Way
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Clear explanations of ExpressJS fundamentals, advanced types,
          and real-world examples to make you confident in modern development.
        </p>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">

        <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Strong Type System</h3>
          <p className="text-gray-600 text-sm">
            Understand how ExpressJs improves code safety and prevents bugs.
          </p>
        </div>

        <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Real World Examples</h3>
          <p className="text-gray-600 text-sm">
            Practical examples you can apply in real projects.
          </p>
        </div>

        <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Interview Ready</h3>
          <p className="text-gray-600 text-sm">
            Helps you prepare for frontend & full-stack interviews.
          </p>
        </div>

      </section>

    </div>
  );
}