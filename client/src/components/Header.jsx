import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-darkBlue p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">PaperScraper</h1>
        <nav>
          <a
            href="#home"
            className="px-4 hover:text-lightGrey transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 hover:text-lightGrey transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-4 hover:text-lightGrey transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
