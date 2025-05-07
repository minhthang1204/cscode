import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] h-auto"
    >
      <div className="container">
        <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="items-center justify-between overflow-hidden md:overflow-hidden border lg:flex p-12"
              >
                <div
                  className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <span
                    className="mb-5 rounded-md inline-block py-2  text-2xl font-medium text-black"
                  >
                    About Birdway Synergy
                  </span>
              
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Bridway Synergy is an Agtech company that specializes in providing unique and high-quality agricultural inputs, and services and managing agricultural investment and research projects. 
                    The company also help family farmers maximize their farm’s profit potential.
                     Bridway’s game-changing platform leverages technology to help reduce the cost of production, maximize the value of crops and make confident decisions to improve the bottom line - all in one place. 
                     Bridway was established in 2018, with a vision that aspires to drive our customers’ ambitions towards a future food security, and a green world.

                  </p>
            
                  <a
                    href=""
                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Learn More
                  </a>
                </div>
                <div className="text-center -mr-16 pr-6">
                  <div className="relative z-10 inline-block p-16">
                    <img
                      src="assets/images/mission/picture2.jpeg"
                      alt="image"
                      className="mx-auto lg:ml-auto h-[400px]"
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

export default About;