import ProductCard from "./components/cards/ProductCard";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const products = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    description: 'Learn to build modern web applications with React, Node.js, and MongoDB. Master frontend and backend development.',
    price: '$99',
    duration: '12 weeks',
    level: 'Intermediate'
  },
  {
    id: '2',
    title: 'Python for Data Science',
    description: 'Master data analysis, visualization, and machine learning with Python, Pandas, and Scikit-learn.',
    price: '$79',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    description: 'Create beautiful and user-friendly interfaces. Learn Figma, design principles, and prototyping.',
    price: '$89',
    duration: '10 weeks',
    level: 'All Levels'
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile apps with React Native. From basics to publishing on app stores.',
    price: '$129',
    duration: '14 weeks',
    level: 'Intermediate'
  },
  {
    id: '5',
    title: 'Cloud Computing with AWS',
    description: 'Learn Amazon Web Services from scratch. Master EC2, S3, Lambda, and cloud architecture best practices.',
    price: '$149',
    duration: '16 weeks',
    level: 'Advanced'
  },
  {
    id: '6',
    title: 'Digital Marketing Fundamentals',
    description: 'Master SEO, social media marketing, content strategy, and analytics to grow your business online.',
    price: '$69',
    duration: '6 weeks',
    level: 'Beginner'
  }
];

export default function Home() {
  return (
    <main className={`${montserrat.className} min-h-screen bg-black text-white`}>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn Skills for the <span className="text-primary">Future</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Master in-demand skills with our expert-led courses. Start your learning journey today.
          </p>
          <button 
            className="px-8 py-3 rounded-md font-medium text-lg transition-all duration-200"
            style={{ backgroundColor: 'var(--primary-color)', color: 'black' }}
          >
            Explore Courses
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6 bg-linear-to-b from-black to-gray-950">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Courses</h2>
            <p className="text-gray-400 text-lg">
              Choose from our most popular courses and start learning today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
