import React from 'react'

const Commodities=()=> {
  return (
     
    <section
      id="about"
      className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="items-center justify-between overflow-hidden md:overflow-visible border lg:flex"
              >
              <div className="text-center -mr-16">
                  <div className="relative z-10 inline-block">
                    <img
                      src="assets/images/commodities/picture6.jpeg"
                      alt="image"
                      className="mx-auto lg:ml-auto"
                    />
                  </div>
                </div>
                <div
                  className="w-full py-12 px-12 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <span
                    className="mb-5 rounded-md inline-block py-2 px-5 text-2xl font-bold text-black"
                  >
                    Our Commodities
                  </span>
                  <p className="mb-9 text-base leading-relaxed text-body-color pl-6">
                    The company plans to facilitate the production of varieties of farm produce such as: crops (cereals, tubers and fruits), millet, rice, and vegetables amongst many others.
                    </p>              
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Commodities;



