import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full bg-darkBlue text-white py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold mb-10">What Our Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-lightGrey text-darkBlue rounded-lg shadow-lg">
            <p>
              "PaperScraper has revolutionized the way I consume news. Highly
              recommend!"
            </p>
            <h4 className="text-xl font-bold mt-4">- Charles</h4>
          </div>
          <div className="p-6 bg-lightGrey text-darkBlue rounded-lg shadow-lg">
            <p>
              "The summaries are so accurate and helpful. I love the real-time
              updates."
            </p>
            <h4 className="text-xl font-bold mt-4">- Erica</h4>
          </div>
          <div className="p-6 bg-lightGrey text-darkBlue rounded-lg shadow-lg">
            <p>
              "An amazing tool that saves me a lot of time. The interface is
              very user-friendly."
            </p>
            <h4 className="text-xl font-bold mt-4">- Peter</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
