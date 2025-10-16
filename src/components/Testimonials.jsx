
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";


function Testimonials() {
  const slides = [
    {
      name: "Pooja Sharma",
      img: "../../public/student1.jpg",
      text: "Vertex Markets helped me understand how to manage risk and diversify my portfolio more effectively. Their research insights are easy to follow and always backed by data.",
    },
    {
      name: "Ravi Verma",
      img: "../../public/student2.jpg",
      text: "The advisory team at Vertex Markets gives practical, actionable strategies rather than vague predictions.",
    },
    {
      name: "Anjali Mehta",
      img: "../../public/student4.jpg",
      text: "What sets Vertex Markets apart is their clarity and depth of research. The reports are comprehensive, yet simple enough to apply in real trading scenarios.",
    },
    {
      name: "Sandeep Yadav",
      img: "../../public/student3.jpg",
      text: "Vertex Markets has been instrumental in helping me build a solid investment plan. Their team is responsive, transparent, and genuinely cares about client success.",
    },
     
  ];

  return (
    <section className="md:py-20 py-10 bg-white ">
      <h2 className="text-center md:text-3xl text-2xl font-bold text-[#1da1f2]">
        What Our Clients Say
      </h2>

      <div className="relative overflow-visible max-w-7xl mx-auto px-4">
        <Swiper
          // spaceBetween={15}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
         
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="testimonial-swiper  md:py-12 py-7  "
          breakpoints={{
           320: {       
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
            768: { slidesPerView: 2,
              spaceBetween: 15,
             },
            1024: { slidesPerView: 3,
              spaceBetween: 15,
             },
             
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 ease-in-out transform ${
                    isActive
                      ? "scale-110 shadow-xl z-20 "
                      : "scale-90 opacity-80"
                  } bg-[#052365] rounded-2xl overflow-hidden text-white`}
                >
                  <div className="flex flex-col items-center md:py-10 py-5 md:px-6 px-3 bg-[#052365]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className={`w-24 h-24 rounded-full border-4 border-white mb-3 object-cover ${
                        isActive ? "ring-4 ring-[#1da1f2]" : ""
                      }`}
                    />
                    <h3 className="md:text-lg text-sm font-semibold">{item.name}</h3>
                    <div className="flex text-[#1da1f2] md:mb-2 mb-0">{"★★★★★"}</div>
                  </div>
                  <div className="bg-white text-gray-700 md:p-6 p-3 text-center min-h-[160px]">
                    <p className="md:text-sm text-[9px] leading-relaxed italic">
                      "{item.text}"
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
