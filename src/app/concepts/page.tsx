import Link from "next/link";

const concept = [
     {name: "What is ExpressJs?", path:"/concepts/What-is-ExpressJS"},
     {name: "Why use express over Nodejs?", path:"/concepts/WhyExpressOverNode"},
     {name: "What is Middleware?", path:"/concepts/WhatIsMiddleware"},
     {name: "Request-Response Lifecycle in Express.js?", path:"/concepts/RequestResponseLifecycle"},
     {name: "What is the role of next() function??", path:"/concepts/NextFunctionRole"},
     {name: "How routing works in Express?", path:"/concepts/ExpressRouting"},
];

export default function Concepts(){
    
    return(
    
        <section>
         <h1 className="text-3xl font-bold m-8 text-blue-600">ExpressJS Concepts</h1>
         <ul className="grid gap-4 sm:grid-cols-3 m-12">
        {concept.map(c => (
          <li key={c.name} className="bg-blue-50 p-4 rounded shadow">
            <Link href={c.path} className="font-semibold">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
      
    )
}