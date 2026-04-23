export default function CreateExpressServer() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Create a Basic Express Server
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Create a basic Express.js server that listens on port 3000 and returns 
          &quot;Hello World&quot; when accessed in the browser.
        </p>
      </section>

      {/* Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");

const app = express();

// Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>express module is used to create the server</li>
          <li>express() initializes the app</li>
          <li>app.get() defines a route</li>
          <li>req and res handle request & response</li>
          <li>res.send() sends response to client</li>
          <li>listen() starts server on port 3000</li>
        </ul>
      </section>

      {/* Output */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Output
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Open your browser and go to:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`http://localhost:3000`}
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          👉 You will see: Hello World
        </p>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Express simplifies Node.js server creation</li>
          <li>app.get() handles HTTP GET requests</li>
          <li>req & res are core objects</li>
          <li>listen() starts the server</li>
          <li>Most basic Express app structure</li>
        </ul>
      </section>

    </div>
  );
}