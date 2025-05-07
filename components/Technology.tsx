import React from 'react'

const Technology=()=> {
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
                className="items-center justify-between overflow-hidden md:overflow-hidden border lg:flex"
              >
                <div
                  className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <span
                    className="mb-5 inline-block py-2 px-5 text-2xl font-medium text-black"
                  >
                    TECHNOLOGY & DATA
                  </span>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    We leverage technology to give farmers tools & data-driven practices such as GPS and Weather data tracking to help them purchase only the best seeds & input, optimize production decisions, identify yield & profit opportunities and to reduce cost of production.

                  </p>
              
                </div>
                <div className="text-center -mr-16">
                  <div className="relative z-10 inline-block">
                    <img
                      src="/assets/images/tech_and_data/picture3.jpeg"
                      alt="image"
                      className="mx-auto lg:ml-auto h-[540px]"
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

export default Technology;