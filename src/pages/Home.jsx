import BlogCard from '../components/Blog/BlogCard';
import { posts } from '../data/posts';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredPosts = posts.slice(0, 2);

  return (
    <div className="page-container">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-100 mb-4">
          Frontend Development Journey
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Sharing my learning experiences in React and modern web development
        </p>
        <Link to="/blog" className="btn btn-primary">
          Explore All Posts
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {featuredPosts.map(post => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}