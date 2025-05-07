import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { IForm } from '../interfaces/member.interface';
import { Alert } from '../util/toastr';
import toastr from '../util/toastr';

const Form = () => {
  const [state, setState] = useState<any>();
  const [lga, setLga] = useState<any>();
  const [residenceLga, setResidenceLga] = useState<any>();
  const [formInput, setFormInput] = useState<IForm | any>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios.post('/api/apply', formInput)
      .then((res) => {
        if (res.status === 201) {
          Alert().then((res) => {
            window.location.reload();
          })
        } else {
          toastr.error("Oops! Somthing went wrong");
        }
      }).catch(err => {
        toastr.error("Oops! Something went wrong");
      }).finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    axios
      .get("https://locationsng-api.herokuapp.com/api/v1/states")
      .then(function (response) {
        setState(response?.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    if (formInput?.stateOfOrigin) {
      axios
        .get(
          `https://locationsng-api.herokuapp.com/api/v1/states/${formInput?.stateOfOrigin}/lgas`
        )
        .then(function (response) {
          setLga(response?.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

  }, [formInput?.stateOfOrigin]);

  useEffect(() => {
    if (formInput?.stateOfResidence) {
      axios
        .get(
          `https://locationsng-api.herokuapp.com/api/v1/states/${formInput?.stateOfResidence}/lgas`
        )
        .then(function (response) {
          setResidenceLga(response?.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, [formInput?.stateOfResidence]);

  return (
    <section id="form" className="relative py-20 md:py-[120px]">
      <div className="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#f3f4fe] lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-6/12 xl:w-6/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-5 text-base font-semibold text-dark">
                  Leave Us A Message
                </span>
                <h2 className="text-[35px] font-semibold">
                  Have a message? <br />
                  Fill out the form <br />
                  to leave your message
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <svg
                      width="29"
                      height="35"
                      viewBox="0 0 29 35"
                      className="fill-current"
                    >
                      <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                      <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-6 text-lg font-semibold">
                      Our Location
                    </h5>
                    <p className="text-base text-body-color">
                      No. 29 Usuma Street Maitama, Abuja.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <svg
                      width="34"
                      height="25"
                      viewBox="0 0 34 25"
                      className="fill-current"
                    >
                      <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-6 text-lg font-semibold">
                      How Can We Help?
                    </h5>
                    <p className="text-base text-body-color">
                      hello@wootlab.ng
                    </p>
                    <p className="text-base text-body-color">
                      tect@wootlab.ng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12 xl:w-6/12">
            <div
              className="wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]"
              data-wow-delay=".2s
              "
            >
              <h3 className="mb-8 text-2xl font-semibold md:text-[26px] text-center">
                Contact us
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="block md:flex">
                  <div className="mb-6 w-full">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                      name="name"
                      value={formInput?.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6 w-full md:ml-8">
                    <input
                      type="text"
                      placeholder="Phone Number *"
                      className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                      name="phone"
                      value={formInput?.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="block md:flex">
                  <div className="mb-6 w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                      name="email"
                      value={formInput?.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6 w-full md:ml-8">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                      // name="cardNumber"
                      // value={formInput?.cardNumber}
                      // onChange={handleChange}
                    />
                  </div>
                  
                </div>
                <div className="mb-6 w-full md:ml-6">
                    <input
                      type="text"
                      placeholder="Message"
                      className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                      // name="cardNumber"
                      // value={formInput?.cardNumber}
                      // onChange={handleChange}
                    />
                  </div>

                <div className="mb-0">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
                  >
                    {
                      !loading ? "Send" : "Loading..."
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form
