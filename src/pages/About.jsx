export default function About() {
  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-100 mb-8">About Me</h1>
        <div className="card space-y-6">
          <p className="text-gray-300">
            Hi! I'm a frontend developer on a journey to master React and modern web development.
            Through this blog, I share my learning experiences, challenges, and discoveries.
          </p>
          <p className="text-gray-300">
            My focus areas include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>React and its ecosystem</li>
            <li>Modern CSS and Tailwind</li>
            <li>JavaScript best practices</li>
            <li>Web performance optimization</li>
            <li>UI/UX design principles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}