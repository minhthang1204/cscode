import React from 'react'

const Research=()=> {
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
              <div className="text-center -mr-16 p-12">
                  <div className="relative z-10 inline-block">
                    <img
                      src="assets/images/mission/picture2.jpeg"
                      alt="image"
                      className="mx-auto lg:ml-auto h-[450px]"
                    />
                  </div>
                </div>
                <div
                  className="w-full py-12 px-12 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <span
                    className="mb-5 rounded-md inline-block py-2 px-5 text-2xl font-bold text-black"
                  >
                    Research projects
                  </span>
                  <p className="mb-9 text-base leading-relaxed text-body-color pl-6">
                    Research findings are used to fuel the resolution of any challenges that may arise during the period of production.
                This can be effected by crop searchers, Agronomists and the likes.  
                An agronomist serving as a farm manager and a crop or plant pathologist who manages and control diseases & infections on the farm can also serve as a liaison officer between the farmer and crop researchers in order to review research findings and to use knowledge to recommend solutions.</p>              
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research;