import Link from "next/link";

export default function Footer() {
  return (
   <footer className="p-8 sm:p-12 border-t border-gray-800 text-gray-400 bg-black">
      <section className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-20">
          <div className="block">
            <p className="text-lg text-gray-100 my-4">Generate interior designs with AI.</p>
            <p className="mt-2">
              © 2022-2024 All rights reserved</p>
              <p className="sm">House Design AI® is a registered trademark.</p>
              <div className="sm:whitespace-nowrap">
              Morocco ,Marrakesh
              </div>
          </div>

          <div className="block">
            <h3 className="text-lg font-semibold text-gray-100">Resources</h3>
            <div className="flex flex-col gap-1 mt-2">
              <a href="" className="text-gray-400 hover:text-white hover:underline">
              Interior Design Advice
              </a>
              <a href="" className="text-gray-400 hover:text-white hover:underline">
              Interior Design Glossary              </a>
              <a href="" className="text-gray-400 hover:text-white hover:underline">
              Interior Design Podcast              </a>
            </div>
          </div>

          <div className="block">
              <h3 className="text-lg font-semibold text-gray-100">Links</h3>
              <div className="flex flex-col gap-1 mt-2">
                <a href="" className="text-gray-400 hover:text-white hover:underline">Log in</a>
                <a href="" className="text-gray-400 hover:text-white hover:underline">Terms of Service</a>
                <a href="" className="text-gray-400 hover:text-white hover:underline">Privacy Policy</a>
              </div>
          </div>
          <div className="block">
              <h3 className="text-lg font-semibold text-gray-100">Contact</h3>
              <div className="flex flex-col gap-1 mt-2">
                <a href="" className="text-gray-400 hover:text-white hover:underline">Twitter</a>
                <a href="" className="text-gray-400 hover:text-white hover:underline">Support (email)</a>
                <a href="" className="text-gray-400 hover:text-white hover:underline">Press (email)</a>
              </div>
          </div>
      </section>
   </footer>
  );
}
