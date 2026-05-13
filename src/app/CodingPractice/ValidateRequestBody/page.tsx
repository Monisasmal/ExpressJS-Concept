export default function ValidateRequestBody() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Validate Request Body Using Middleware
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Create middleware in Express.js to validate the request body before 
          creating a new user.
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

app.use(express.json());

// Validation Middleware
const validateUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and Email are required"
    });
  }

  next();
};

// Route
app.post("/users", validateUser, (req, res) => {
  res.status(201).json({
    message: "User created successfully",
    user: req.body
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>express.json() parses JSON request body</li>
          <li>Middleware checks required fields</li>
          <li>If validation fails → returns error response</li>
          <li>If valid → next() moves to route handler</li>
          <li>Middleware keeps routes clean and reusable</li>
        </ul>
      </section>

      {/* Output */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Example Request
        </h2>

        <pre className="bg-gray-900 text-white p-3 rounded-lg text-xs sm:text-sm overflow-x-auto">
{`POST /users

{
  "name": "Manaswini",
  "email": "manaswini@gmail.com"
}`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Response:
        </p>

        <pre className="bg-gray-900 text-white p-3 rounded-lg text-xs sm:text-sm overflow-x-auto mt-2">
{`{
  "message": "User created successfully",
  "user": {
    "name": "Manaswini",
    "email": "manaswini@gmail.com"
  }
}`}
        </pre>
      </section>

      {/* Invalid Request */}
      <section className="mb-6 bg-red-50 border-l-4 border-red-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Invalid Request Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 rounded-lg text-xs sm:text-sm overflow-x-auto">
{`POST /users

{
  "name": "Manaswini"
}`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Response:
        </p>

        <pre className="bg-gray-900 text-white p-3 rounded-lg text-xs sm:text-sm overflow-x-auto mt-2">
{`{
  "message": "Name and Email are required"
}`}
        </pre>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Middleware validates request before controller</li>
          <li>Improves security and data integrity</li>
          <li>Reusable across multiple routes</li>
          <li>next() continues request lifecycle</li>
          <li>Commonly used with express-validator</li>
        </ul>
      </section>

    </div>
  );
}