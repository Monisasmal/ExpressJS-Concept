import Link from "next/link";

const CodingQue = [
     {name: "Create a Basic Express Server?", path:"/CodingPractice/CreateExpressServer"},
     {name: "Create CRUD API for users?", path:"/CodingPractice/CreateCRUDUserAPI"},
     {name: "Implement Logger Middleware in Express.js?", path:"/CodingPractice/LoggerMiddleware"},
];

export default function InterviewCoding(){
    
    return(
    
        <section>
         <h1 className="text-3xl font-bold m-8 text-blue-600">ExpressJS Coding Practice</h1>
         <ul className="grid gap-4 sm:grid-cols-3 m-12">
        {CodingQue.map(cp => (
          <li key={cp.name} className="bg-blue-50 p-4 rounded shadow">
            <Link href={cp.path} className="font-semibold">
              {cp.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
      
    )
}