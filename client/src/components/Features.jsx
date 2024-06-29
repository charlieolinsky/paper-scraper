import React from "react";

const Features = () => {
  return (
    <section className="w-full bg-lightGrey py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold mb-10 text-darkBlue">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-darkBlue">
              Accurate Summaries
            </h4>
            <p className="text-darkBlue">
              Our AI provides concise and accurate summaries of articles, saving
              you time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-darkBlue">
              Real-time Updates
            </h4>
            <p className="text-darkBlue">
              Get the latest articles and updates in real-time, keeping you
              informed.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-darkBlue">
              User-Friendly Interface
            </h4>
            <p className="text-darkBlue">
              An intuitive and easy-to-use interface designed for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
