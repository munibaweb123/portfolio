import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-gray-900 text-white py-16 px-8 flex flex-col items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-grid-gray-800 opacity-20 pointer-events-none" />
      <h2 className="text-3xl font-bold mb-4">
        Ready to take <span className="text-purple-400">your</span> digital presence to the next level?
      </h2>
      <p className="text-gray-400 mb-6 max-w-xl">
        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
      </p>
      <Link
        href="/contact"
        className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition"
      >
        Contact Me Now <ArrowRight size={18} />
      </Link>
      <footer className="mt-12 text-gray-500 text-sm">
        <p>Copyright &copy; 2024 Adrian Hajdin</p>
        <div className="flex gap-4 justify-center mt-4">
          <Link href="#" className="hover:text-white"> {/* Instagram */}
            <i className="fab fa-instagram text-lg"></i>
          </Link>
          <Link href="#" className="hover:text-white"> {/* GitHub */}
            <i className="fab fa-github text-lg"></i>
          </Link>
          <Link href="#" className="hover:text-white"> {/* WhatsApp */}
            <i className="fab fa-whatsapp text-lg"></i>
          </Link>
          <Link href="#" className="hover:text-white"> {/* LinkedIn */}
            <i className="fab fa-linkedin text-lg"></i>
          </Link>
        </div>
      </footer>
    </section>
  );
}
