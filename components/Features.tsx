import React, { useEffect, useState } from 'react'

const Features = () => {

  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/apply");
        const data = await res.json();
        setMembers(data.data); // vì API trả về { message, data }
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return <p>Loading ....</p>;

  return (
    <section className="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 lg:mb-20 text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Target
              </span>
              <h2
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
              >
                Bridway’s target
              </h2>
              <span
                className="mb-2 text-dark md:text-[22px]"
              >
                {/* {{day}} */}
                05-05-2025
              </span>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-2 md:w-1/2 lg:w-1/2 ">
            <div className="group mb-12 rounded-2xl bg-red-100 p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <div
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.9313 11.7H38.9188C40.5438 10.9687 41.7626 9.99374 42.2501 8.69374C42.9001 6.98749 42.2501 5.19999 40.3001 3.33124C38.1876 1.29999 35.9938 0.568738 33.8001 1.13749C29.9813 2.11249 27.4626 7.06874 26.2438 9.99374C25.1063 7.06874 22.5876 2.11249 18.6876 1.13749C16.4938 0.568738 14.3001 1.29999 12.1876 3.33124C10.2376 5.19999 9.5876 6.98749 10.2376 8.69374C10.7251 9.99374 12.0251 10.9687 13.5688 11.7H7.06885C5.0376 11.7 3.4126 13.325 3.4126 15.3562V21.5312C3.4126 23.5625 5.0376 25.1875 7.06885 25.1875H7.71885V46.2312C7.71885 48.8312 9.83135 51.025 12.5126 51.025H40.1376C42.7376 51.025 44.9313 48.9125 44.9313 46.2312V25.1875C46.9626 25.1875 48.5876 23.5625 48.5876 21.5312V15.3562C48.5063 13.325 46.8813 11.7 44.9313 11.7ZM34.5313 3.98124C34.7751 3.89999 35.0188 3.89999 35.1813 3.89999C36.1563 3.89999 37.2126 4.38749 38.2688 5.52499C38.7563 6.01249 39.8126 7.06874 39.5688 7.79999C39.0001 9.34374 33.9626 10.6437 28.9251 11.05C30.0626 8.36874 32.1751 4.54999 34.5313 3.98124ZM13.0001 7.71874C12.7563 6.98749 13.8126 5.93124 14.3001 5.44374C15.4376 4.38749 16.4126 3.81874 17.3876 3.81874C17.6313 3.81874 17.8751 3.81874 18.0376 3.89999C20.4751 4.54999 22.5063 8.28749 23.6438 10.9687C18.6063 10.5625 13.5688 9.26249 13.0001 7.71874ZM42.0063 46.2312C42.0063 47.2875 41.1126 48.1812 40.0563 48.1812H12.4313C11.3751 48.1812 10.4813 47.2875 10.4813 46.2312V25.1875H41.9251V46.2312H42.0063ZM45.6626 21.5312C45.6626 22.0187 45.3376 22.3437 44.8501 22.3437H7.06885C6.6626 22.3437 6.25635 22.0187 6.25635 21.5312V15.3562C6.25635 14.95 6.6626 14.5437 7.06885 14.5437H44.8501C45.2563 14.5437 45.6626 14.8687 45.6626 15.3562V21.5312Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
                Digitalize investments
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
                An online platform that gives everyone the opportunity to engage in Agribusiness anytime by funding farms and trading of agricultural commodities.
              </p>
              <a
                href=""
                className="text-base font-medium text-body-color hover:text-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  
}

export default Features;