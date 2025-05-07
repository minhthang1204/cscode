import React from 'react'

const Vision=()=> {
  return (
   
    <section
      id="about"
      className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] container-fluid"
    >
      <div className="container">
        <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="items-center justify-between overflow-hidden md:overflow-visible border lg:flex"
              >
                <div
                  className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <span
                    className="mb-5 inline-block py-2 px-2 text-2xl font-medium text-black"
                  >
                    Our Vision
                  </span>
                   <h2
                className="mb-4 text-2xl font-bold text-dark sm:text-4xl md:text-[22px]"
              >
                What we hope to achieve
              </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    To make africa the food basket of the world.

                  </p>
              
                </div>
                <div className="text-center -ml-12">
                  <div className="relative z-10 inline-block">
                    <img
                      src="assets/images/vision/picture1.jpeg"
                      alt="image"
                      className="mx-auto lg:ml-auto h-[430px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision;