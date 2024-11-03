export const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    slug: "getting-started-react",
    excerpt: "Learn the basics of React and start building your first component.",
    content: `

React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll cover everything you need to know to get started with React development.

## Why Choose React?

React's component-based architecture makes it easy to build and maintain large applications. Its virtual DOM implementation ensures excellent performance, while the vast ecosystem provides solutions for common development challenges.

## Key Concepts

### Components
Components are the building blocks of React applications. They can be either function components or class components:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

### State and Props
State is internal data that can change over time, while props are external data passed to components:

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`
    `,
    date: "2024-03-15",
    readTime: 5,
    image: "/images/gettin.png",
    author: {
      name: "Vladimirov Vladimir",
      avatar: "/images/author1.jpg"
    },
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind",
    excerpt: "Discover how to create beautiful designs with Tailwind CSS utility classes.",
    content: `

Tailwind CSS has revolutionized the way we style web applications. Let's dive deep into its powerful features and best practices.

## Why Tailwind CSS?

Tailwind provides a utility-first approach that allows for rapid development without sacrificing customization capabilities. Its purge system ensures minimal production bundles.

## Key Features

### Responsive Design
Tailwind makes it easy to build responsive layouts:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Content -->
</div>
\`\`\`

### Dark Mode
Implementing dark mode is straightforward:

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <!-- Content -->
</div>
\`\`\`
    `,
    date: "2024-03-14",
    readTime: 4,
    image: "/images/mastering-tailwind-css-.png",
    author: {
      name: "Vladimirov Vladimir",
      avatar: "/images/author1.jpg"
    },
    tags: ["CSS", "Tailwind", "Design"]
  },
  {
    id: 3,
    title: "Understanding React Hooks",
    slug: "understanding-hooks",
    excerpt: "Deep dive into React Hooks and how they can simplify your components.",
    content: `

React Hooks have transformed how we write React components. Let's explore the most important hooks and their use cases.

## Why Hooks?

Hooks allow you to use state and other React features without writing class components. They promote code reuse and cleaner component logic.

## Essential Hooks

### useState
Manage local state in function components:

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

### useEffect
Handle side effects in your components:

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`
    `,
    date: "2024-03-13",
    readTime: 6,
    image: "/images/understanding-react-hooks--centered-text-.png",
    author: {
      name: "Vladimirov Vladimir",
      avatar: "/images/author1.jpg"
    },
    tags: ["React", "Hooks", "JavaScript"]
  }
];