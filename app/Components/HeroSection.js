"use client";
import Link from "next/link";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <section id="hero" className="relative w-full h-screen">
      <Slider {...settings} className="absolute inset-0">
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl font-extrabold sm:text-5xl">{slide.title}</h1>
              <p className="mt-4 text-lg max-w-2xl mx-auto">{slide.description}</p>
              <div className="mt-8">
                <Link href="/Signup" className="inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-md hover:bg-blue-700">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
