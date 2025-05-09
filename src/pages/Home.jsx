import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import desco from "../assets/org/desco.png";
import nesco from "../assets/org/nesco.png";
import wasa from "../assets/org/wasa.png";
import pgcb from "../assets/org/pgcb.png";
import Slider from "../components/Slider";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
            আপনার বিল, এক ক্লিকে পরিশোধ করুন!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            দেশের সব ধরনের ইউটিলিটি বিল পরিশোধ করুন ঘরে বসেই
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
            এখনি শুরু করুন
          </button>
        </div>
      </section>
        <section>
          <Slider></Slider>
        </section>
      {/* Organization Icons Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            যেসব প্রতিষ্ঠানের বিল পরিশোধ করা যায়
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            <img src={desco} alt="DESCO" className="w-20 h-20 object-contain" />
            <img src={nesco} alt="NESCO" className="w-20 h-20 object-contain" />
            <img src={wasa} alt="WASA" className="w-20 h-20 object-contain" />
            <img src={pgcb} alt="PGCB" className="w-20 h-20 object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
