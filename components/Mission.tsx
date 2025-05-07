import React from 'react'

const Mission = () => {
  return (
    <section id="mission" className="pt-20 md:pt-[120px]">
      <div className="container px-4">
        <div className="flex flex-wrap">
          <div className="mx-4 w-full">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Mission
              </span>
              <h2
                className="mb-4 text-2xl font-bold text-dark sm:text-2xl md:text-[22px]"
              >
                What we set out to achieve
              </h2>
              <p
                className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed text-left"
              >
                To actualize the allegation that the Agricultural sector of the Nigerian economy is  capable of becoming once again, the greatest Gross Domestic Product earner like it used to be in the pre and immediate post-independence years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission;