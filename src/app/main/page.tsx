import { getNotionDatabase } from '../api/notion';

export default function Main() {
  const data = getNotionDatabase();

  console.log(data);

  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-bold text-xl text-gray-900">MyBlog</a>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <section className="mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            <div className="flex flex-col md:flex-row">
              {/* <div className="md:w-2/3 mb-6 md:mb-0"> */}
              {/* <img className="w-full h-64 object-cover rounded-lg" src="https://via.placeholder.com/600x400" alt="Featured Image" /> */}
              {/* </div> */}
              <div className="md:pl-6">
                <h3 className="text-xl font-semibold mb-2">A Journey into Web Development</h3>
                <p className="text-gray-600 mb-4">Discover the latest trends and techniques in web development, and how you can apply them to your projects.</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-lg shadow-md">
              {/* <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://via.placeholder.com/400x200" alt="Article Image" /> */}
              <h3 className="text-xl font-semibold mb-2">Understanding CSS Grid</h3>
              <p className="text-gray-600 mb-4">Learn how to build complex layouts easily using CSS Grid and its powerful features.</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-md">
              {/* <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://via.placeholder.com/400x200" alt="Article Image" /> */}
              <h3 className="text-xl font-semibold mb-2">JavaScript Async Patterns</h3>
              <p className="text-gray-600 mb-4">Async programming in JavaScript can be tricky. Learn the common patterns to manage async operations.</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-md">
              {/* <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://via.placeholder.com/400x200" alt="Article Image" /> */}
              <h3 className="text-xl font-semibold mb-2">React Hooks Explained</h3>
              <p className="text-gray-600 mb-4">React Hooks have revolutionized state management in React apps. Here's how to use them effectively.</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-10 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">&copy; 2024 MyBlog. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
