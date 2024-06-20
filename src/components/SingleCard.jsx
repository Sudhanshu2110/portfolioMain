import React from "react";
const SingleCard = ({
    image,
    projectDescription,
    projectTitle,
    titleHref,
    viewHref,
    codeHref,
  }) => {
    return (
      <>
        {/*  */}
        <div className="mb-10 overflow-hidden rounded-lg  dark:bg-slate-800 bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card shadow-xl dark:hover:shadow-3">
          <img src={image} alt="" className="w-full" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a  
                 target="_blank"
                 rel="noopener noreferrer"
                href={titleHref ? titleHref : "/#"}
                className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {projectTitle}
              </a>
            </h3>
            <p className="mb-7 text-base leading-relaxed text-body-color dark:text-gray-200">
              {projectDescription}
            </p>
  
            
               <div className="flex items-center justify-center gap-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={viewHref ? viewHref : "#"}
                className="text-teal-600 bg-gray-300 px-4 py-2 border-none  rounded-md "
              >
                View
              </a>
              <a
                href={codeHref ? codeHref : "#"}
                className=" text-teal-600 bg-gray-300  px-4 py-2 border-none rounded-md "
              >
                Code
              </a>

              </div> 
              
            
          </div>
        </div>
        {/*  */}
      </>
    );
  };
  export default SingleCard;