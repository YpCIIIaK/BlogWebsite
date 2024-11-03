import { Link } from 'react-router-dom';

export default function BlogCard({ id, title, excerpt, date, readTime, slug, image, author, tags }) {
  return (
    <article className="card hover:shadow-xl transition-shadow overflow-hidden">
      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-400">{author.name}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-400 block">{date} · {readTime} min read</span>
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
        <p className="text-gray-300">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`}
          className="btn btn-primary inline-block"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}