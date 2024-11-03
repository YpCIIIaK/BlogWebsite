import BlogCard from '../components/Blog/BlogCard';
import { posts } from '../data/posts';

export default function Blog() {
  return (
    <div className="page-container">
      <h1 className="text-4xl font-bold text-gray-100 mb-8">Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}