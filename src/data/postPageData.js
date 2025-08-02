const blogPosts = [
  {
    title: "Understanding JavaScript Closures",
    description: "A deep dive into closures in JavaScript and how they can be used for encapsulation and memory efficiency.",
    content: "Closures allow functions to retain access to their lexical scope, even when executed outside that scope. This is powerful for creating private variables and function factories...",
    date: "2024-11-10T09:30:00Z",
    author: "Alice Johnson",
    comments: [
      {
        author: "John Doe",
        date: "2024-11-11T10:00:00Z",
        content: "Really clear explanation. Closures finally make sense!"
      },
      {
        author: "Jane Smith",
        date: "2024-11-12T13:45:00Z",
        content: "Could you also cover how closures affect memory leaks?"
      }
    ]
  },
  {
    title: "Building REST APIs with Express",
    description: "Learn how to create scalable REST APIs using Node.js and Express, covering routing, middleware, and error handling.",
    content: "Express makes it easy to build web applications and APIs. With middleware, route handlers, and tools like Postman, you can quickly prototype and deploy APIs...",
    date: "2024-10-22T14:45:00Z",
    author: "Michael Lee",
    comments: [
      {
        author: "Emma Brown",
        date: "2024-10-23T09:15:00Z",
        content: "This was really helpful for setting up my first API."
      }
    ]
  },
  {
    title: "Demystifying Async/Await",
    description: "This post explores the async/await syntax in JavaScript and how it simplifies working with promises.",
    content: "Async/await allows asynchronous code to look and behave like synchronous code, improving readability and maintainability. Under the hood, it's still based on Promises...",
    date: "2024-09-15T17:00:00Z",
    author: "Sarah Thompson",
    comments: [
      {
        author: "Liam Wilson",
        date: "2024-09-16T08:45:00Z",
        content: "Awesome breakdown of async concepts."
      },
      {
        author: "Sophia Turner",
        date: "2024-09-16T11:00:00Z",
        content: "Could you do a follow-up on handling errors with async/await?"
      }
    ]
  },
  {
    title: "CSS Grid vs Flexbox",
    description: "A comparison between CSS Grid and Flexbox layout systems, and when to use each for responsive design.",
    content: "Flexbox is great for 1D layouts, while Grid excels at 2D. Understanding both helps you choose the right tool for the job. Grid gives you more control over layout structure...",
    date: "2024-12-01T12:15:00Z",
    author: "David Kim",
    comments: [
      {
        author: "Ava Martinez",
        date: "2024-12-02T14:00:00Z",
        content: "Finally understood when to use Grid vs Flex. Thanks!"
      }
    ]
  },
  {
    title: "Getting Started with Prisma ORM",
    description: "An introduction to Prisma, a modern ORM for Node.js and TypeScript, with examples and setup tips.",
    content: "Prisma simplifies database access with an intuitive schema and auto-generated client. Set up your schema, run migrations, and start querying with type safety...",
    date: "2025-01-05T08:20:00Z",
    author: "Emily Garcia",
    comments: [
      {
        author: "Noah Davis",
        date: "2025-01-06T09:10:00Z",
        content: "Great intro to Prisma. I love the autocomplete!"
      }
    ]
  }
];

export default blogPosts;