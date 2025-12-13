import React from "react";
import portfolios from "../../assets/data/portfolioData2";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find(p => p.id === activeID);
  if (!portfolio) return null;

  return (
    /* z-[100] guarantees it's above sticky_header (z-index: 99) */
    <div className="fixed inset-0 z-[100] bg-headingColor bg-opacity-40 flex items-center justify-center px-4">
      
      <div className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-[8px] p-5 shadow-lg">
        
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 w-[1.8rem] h-[1.8rem] flex items-center justify-center
                     text-[24px] rounded-md border border-gray-300 bg-white hover:bg-gray-200 duration-200 z-[110]"
        >
          &times;
        </button>

        <figure>
          <img
            src={portfolio.imgUrl}
            alt={portfolio.title}
            className="w-full rounded-[8px] object-cover"
          />
        </figure>

        <h2 className="text-2xl text-headingColor font-[700] my-5">
          {portfolio.title}
        </h2>

        <p className="text-[15px] leading-7 text-smallTextColor">
          {portfolio.description}
        </p>

        <div className="mt-5 flex items-center gap-3 flex-wrap">
          <h4 className="text-headingColor text-[18px] font-[700]">
            Technologies:
          </h4>

          {portfolio.technologies.map((item, index) => (
            <span
              key={index}
              className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]"
            >
              {item}
            </span>
          ))}
        </div>

        <a href={portfolio.siteUrl} target="_blank" rel="noopener noreferrer">
          <button
            className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px]
                       font-[500] hover:bg-headingColor ease-in duration-300"
          >
            Live Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default Modal;
