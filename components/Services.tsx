import React from 'react'

const Services=()=> {
  return (
     <section id="services" className="pt-20 md:pt-[120px]">
      <div className="container px-4">
        <div className="flex flex-wrap">
          <div className="mx-4 w-full">
            <div className="mx-auto mb-[60px] max-w-[620px] text-start lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
              >
                What we set out to achieve
              </h2>
              <p
                className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
              >
                Slide into the new era of modern agriculture with tailor-made solutions, products and services meant for you. Bridway’s services includes but are not limited to; Ensuring food security, Reducing cost of production for farmers through technology and Managing agricultural investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;