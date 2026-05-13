export default function ImplementJWTAuthentication() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Implement JWT Authentication in Express.js
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Implement JWT authentication in Express.js with login functionality 
          and protected routes using middleware.
        </p>
      </section>

      {/* Install */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Install Packages
        </h2>

        <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`npm install express jsonwebtoken bcryptjs`}
        </pre>
      </section>

      {/* Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();

app.use(express.json());

// Dummy User
const user = {
  id: 1,
  email: "admin@gmail.com",
  password: bcrypt.hashSync("123456", 10)
};

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check email
  if (email !== user.email) {
    return res.status(400).json({
      message: "Invalid Email"
    });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid Password"
    });
  }

  // Generate JWT Token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    "secretKey",
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login Successful",
    token
  });
});

// Auth Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Access Denied"
    });
  }

  try {
    const verified = jwt.verify(token, "secretKey");
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Invalid Token"
    });
  }
};

// Protected Route
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to Dashboard",
    user: req.user
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
          <li>bcrypt hashes passwords securely</li>
          <li>jsonwebtoken creates JWT tokens</li>
          <li>Login route validates credentials</li>
          <li>jwt.sign() generates token</li>
          <li>Middleware verifies token using jwt.verify()</li>
          <li>Protected routes require valid token</li>
        </ul>
      </section>

      {/* Login Request */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Login Request Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`POST /login

{
  "email": "admin@gmail.com",
  "password": "123456"
}`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Response:
        </p>

        <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-xs sm:text-sm mt-2">
{`{
  "message": "Login Successful",
  "token": "JWT_TOKEN"
}`}
        </pre>
      </section>

      {/* Protected Route */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Access Protected Route
        </h2>

        <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`GET /dashboard

Headers:
Authorization: JWT_TOKEN`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Response:
        </p>

        <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-xs sm:text-sm mt-2">
{`{
  "message": "Welcome to Dashboard",
  "user": {
    "id": 1,
    "email": "admin@gmail.com"
  }
}`}
        </pre>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>

        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>JWT = JSON Web Token</li>
          <li>Used for stateless authentication</li>
          <li>bcrypt hashes passwords securely</li>
          <li>Middleware protects routes</li>
          <li>Token usually sent in Authorization header</li>
          <li>jwt.verify() validates token authenticity</li>
        </ul>
      </section>

    </div>
  );
}