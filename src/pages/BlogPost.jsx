import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { marked } from 'marked';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="page-container">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Post Not Found</h1>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link 
        to="/blog"
        className="inline-flex items-center text-gray-400 hover:text-indigo-400 mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="aspect-video mb-8 overflow-hidden rounded-lg">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-gray-100 font-medium">{post.author.name}</div>
              <div className="text-sm text-gray-400">
                {post.date} · {post.readTime} min read
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="text-sm px-3 py-1 bg-gray-700 rounded-full text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            {post.title}
          </h1>
        </div>

        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </article>
    </div>
  );
}