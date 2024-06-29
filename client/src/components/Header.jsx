import React from "react";
import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">PaperScraper Logo</div>
//       <nav>
//         <ul className="nav-list">
//           <li className="nav-item">Home</li>
//           <li className="nav-item">About</li>
//           <li className="nav-item">Search</li>
//           <li className="nav-item">Login</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">PaperScraper</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
