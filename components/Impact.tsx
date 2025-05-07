import React from 'react';
import picture2 from 'assets/images/picture-2.jpeg';

const Impact=()=> {
  return (
    <section id="impact" className="pt-20 md:pt-[120px h-[600px]" style={{backgroundImage:`url(assets/images/mission/picture2.jpeg)`,backgroundAttachment:'fixed',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className="container px-4">
        <div className="flex flex-wrap">
          <div className="mx-4 w-full">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-white">
                Our Impact
              </span>
              <h2
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
              >
                What we hope to achieve
              </h2>
              <p
                className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
              >
                Farmer stories, partner stories or awards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact;