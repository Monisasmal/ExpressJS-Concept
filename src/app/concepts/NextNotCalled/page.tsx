export default function NextNotCalled() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What Happens if next() is Not Called in Express.js
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              In Express.js, next() is used to pass control to the next middleware 
              or route handler. If next() is not called, the request will not move 
              forward in the middleware chain.
            </p>
          </section>

          {/* What Happens */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. What Happens if next() is Not Called
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Request gets stuck (no further execution)</li>
              <li>No response is sent to the client</li>
              <li>Browser keeps loading (pending request)</li>
              <li>Next middleware or route is never reached</li>
            </ul>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. When This Happens
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Forgot to call next()</li>
              <li>Forgot to send response using res.send()/res.json()</li>
              <li>Conditional logic blocks execution</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why It is Important
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Ensures proper request flow</li>
              <li>Avoids hanging requests</li>
              <li>Improves user experience</li>
              <li>Prevents server issues</li>
            </ul>
          </section>

          {/* How to Fix */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How to Fix It
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Always call next() if passing control</li>
              <li>OR send a response using res.send()/res.json()</li>
              <li>Handle all conditions properly</li>
              <li>Use return to avoid multiple responses</li>
            </ul>
          </section>

          {/* Code */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Wrong Example (Missing next)
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`app.use((req, res, next) => {
  console.log("Middleware running");
  // next() is missing ❌
});

app.get("/", (req, res) => {
  res.send("Home Page");
});`}
            </pre>
          </section>

          {/* Correct Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Correct Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`app.use((req, res, next) => {
  console.log("Middleware running");
  next(); // ✅ passes control
});

app.get("/", (req, res) => {
  res.send("Home Page");
});`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages (Calling next properly)
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Smooth middleware execution</li>
              <li>No blocked requests</li>
              <li>Better application flow</li>
              <li>Improved performance</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages (If not handled properly)
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Request hangs forever</li>
              <li>Debugging becomes difficult</li>
              <li>Poor user experience</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>If next() is not called → request stops</li>
              <li>No response → browser keeps loading</li>
              <li>Must call next() OR send response</li>
              <li>Common beginner mistake</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}