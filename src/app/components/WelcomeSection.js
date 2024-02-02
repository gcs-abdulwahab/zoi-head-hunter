import Image from 'next/image';
import Link from 'next/link';
import { Slide, Fade, Zoom } from 'react-reveal';
import Tilt from 'react-parallax-tilt';

const WelcomeSection = () => {

  return (
    <section className="relative bg-section-100 pb-16 md:pb-20 lg:pb-24 pt-28 md:pt-28 lg:pt-32 z-0">
      <div className="container-main">
        <div className="grid gap-x-0 md:gap-6 lg:gap-4 grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-12 lg:col-span-6">

            <Slide bottom>
              <div className="section-header mb-6 md:mb-8 lg:mb-10">
                <h2 className="sec-title text-body mb-6">
                  Maximize your potential with our unique solution of speed and assertiveness.
                </h2>
              </div>
              <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl font-normal font-sec  leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 tracking-0 mb-4 md:mb-5">
                At ZOI Headhunter, we are dedicated to providing customized recruitment and selection solutions for companies in search of exceptional talent.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 md:mt-8 lg:mt-10">
                <Link className="btn-main" href="https://calendly.com/d/49d-j7x-xn4/presentacion-de-servicios">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.7071 15.7929C23.0976 16.1834 23.0976 16.8166 22.7071 17.2071L18.2071 21.7071C17.8166 22.0976 17.1834 22.0976 16.7929 21.7071L14.7929 19.7071C14.4024 19.3166 14.4024 18.6834 14.7929 18.2929C15.1834 17.9024 15.8166 17.9024 16.2071 18.2929L17.5 19.5858L21.2929 15.7929C21.6834 15.4024 22.3166 15.4024 22.7071 15.7929Z" fill="#E8ECEE" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V3H9V2C9 1.44772 8.55229 1 8 1C7.44772 1 7 1.44772 7 2V3.00163C6.52454 3.00489 6.10898 3.01472 5.74818 3.04419C5.18608 3.09012 4.66938 3.18868 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43598 5.18404C2.18868 5.66937 2.09012 6.18608 2.0442 6.74817C1.99998 7.28936 1.99999 7.95373 2 8.75869V17.2413C1.99999 18.0463 1.99998 18.7106 2.0442 19.2518C2.09012 19.8139 2.18868 20.3306 2.43598 20.816C2.81947 21.5686 3.43139 22.1805 4.18404 22.564C4.66938 22.8113 5.18608 22.9099 5.74818 22.9558C6.28937 23 6.95372 23 7.75868 23H13.326C13.9318 23 14.2347 23 14.375 22.8802C14.4967 22.7763 14.5613 22.6203 14.5487 22.4608C14.5342 22.2769 14.32 22.0627 13.8917 21.6343L13.3787 21.1213C12.2071 19.9497 12.2071 18.0503 13.3787 16.8787C14.5095 15.7478 16.3186 15.7085 17.4966 16.7608L19.8787 14.3787C20.2615 13.9959 20.7219 13.7382 21.2093 13.6055C21.5544 13.5116 21.727 13.4647 21.8055 13.4041C21.8891 13.3396 21.9219 13.2966 21.9622 13.199C22 13.1074 22 12.9716 22 12.7V8.75868C22 7.95372 22 7.28936 21.9558 6.74817C21.9099 6.18608 21.8113 5.66937 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43597C19.3306 3.18868 18.8139 3.09012 18.2518 3.04419C17.891 3.01472 17.4755 3.00489 17 3.00163V2ZM7 6V5.00176C6.55447 5.00489 6.20463 5.01357 5.91104 5.03755C5.47262 5.07337 5.24842 5.1383 5.09202 5.21799C4.7157 5.40973 4.40974 5.7157 4.21799 6.09202C4.1383 6.24842 4.07337 6.47262 4.03755 6.91104C4.00078 7.36113 4 7.94342 4 8.8V9H20V8.8C20 7.94342 19.9992 7.36113 19.9624 6.91104C19.9266 6.47262 19.8617 6.24842 19.782 6.09202C19.5903 5.7157 19.2843 5.40973 18.908 5.21799C18.7516 5.1383 18.5274 5.07337 18.089 5.03755C17.7954 5.01357 17.4455 5.00489 17 5.00176V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6Z" fill="#E8ECEE" />
                  </svg>
                  Schedule a Meeting
                </Link>
                <Link className="btn-white" href="#our_services">Our Services</Link>
              </div>
            </Slide>

          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-6">

            <Zoom bottom cascade>
              <Tilt glareEnable={false} glareBorderRadius="20px"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                tiltAxis="y" glarePosition="bottom">
                <Image
                  className="mt-10 md:mt-3 lg:mt-0"
                  src="/hero.png"
                  alt="hero Image"
                  layout="responsive"
                  loading="lazy"
                  width={596}
                  height={528}
                />
              </Tilt>
            </Zoom>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
