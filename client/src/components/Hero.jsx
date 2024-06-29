import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-darkBlue text-white text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4">Welcome to PaperScraper</h2>
        <p className="text-xl mb-8">
          Your intelligent tool for summarizing relevant articles.
        </p>
        <a
          href="#get-started"
          className="bg-lightGrey text-darkBlue px-6 py-2 rounded-full shadow-lg hover:bg-white transition-all"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
