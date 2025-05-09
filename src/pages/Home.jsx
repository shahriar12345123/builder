import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import desco from "../assets/org/desco.png";
import nesco from "../assets/org/nesco.png";
import wasa from "../assets/org/wasa.png";
import pgcb from "../assets/org/pgcb.png";
import Slider from "../components/Slider";
import HomeSections from "../components/HomeSections";



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
               Pay Your Bill in One click    !
          </h1>
          <p className="text-gray-600 text-lg mb-6">
          Pay all types of utility bills in the country from home
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
            Start Now
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
           We Works With These Organizations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center">
            <div className="shadow-lg  rounded-lg bg-white hover:shadow-2xl">
              <img src={desco} alt="DESCO" className="w-40 h-40 object-contain" />
            </div>
            <div className="shadow-lg  rounded-lg bg-white hover:shadow-2xl">
              <img src={nesco} alt="NESCO" className="w-40 h-40 object-contain" />
            </div>
            <div className="shadow-lg  rounded-lg bg-white hover:shadow-2xl">
              <img src={wasa} alt="WASA" className="w-40 h-40 object-contain" />
            </div>
            <div className="shadow-lg  rounded-lg bg-white hover:shadow-2xl">
              <img src={pgcb} alt="PGCB" className="w-40 h-40 object-contain" />
            </div>
          </div>

        </div>
     
        <HomeSections></HomeSections>
      </section>
    </div>
  );
};

export default Home;
