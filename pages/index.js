import Hero from '../components/homepage/Hero';
import FeaturedPosts from '../components/homepage/featured-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSR',
    date: '2023-23-07',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSR',
    date: '2023-23-07',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSR',
    date: '2023-23-07',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSR',
    date: '2023-23-07',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;

// 1. A Hero Section
// 2. Featured Posts
