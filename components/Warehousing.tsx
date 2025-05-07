import React from 'react'

const Warehousing=()=> {
  return (
    <section
      id="about"
      className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div className="mx-4 flex flex-wrap">
            <div className="w-full">
              <div
                className="items-center justify-between overflow-hidden md:overflow-visible border lg:flex p-16"
              >
                <div
                  className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <span
                    className="mb-5 inline-block py-2 px-5 text-2xl font-medium text-black"
                  >
                    WAREHOUSING FACILITIES
                  </span>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    To meet the ever increasing demand for good quality agriculture products, we have intensified our effort to set up storage facilities and warehousing management that has the capacity to store and supply tons of agricultural commodities.
                    We aim to minimize any potential risk that might transpire during the harvest, packing, and shipping of the products.
                  </p>              
                </div>
                <div className="text-center -mr-12">
                  <div className="relative z-10 inline-block">
                    <img
                      src="assets/images/vision/picture1.jpeg"
                      alt="image"
                      className="mx-auto lg:ml-auto"
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

export default Warehousing;





