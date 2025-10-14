
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";


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
    <section className="py-20 bg-white ">
      <h2 className="text-center text-3xl font-bold text-blue-700 mb-12">
        What Our Clients Say
      </h2>

      <div className="relative overflow-visible max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={15}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="testimonial-swiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
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
                  <div className="flex flex-col items-center py-10 px-6 bg-[#052365]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className={`w-24 h-24 rounded-full border-4 border-white mb-3 object-cover ${
                        isActive ? "ring-4 ring-yellow-400" : ""
                      }`}
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="flex text-yellow-400 mb-2">{"★★★★★"}</div>
                  </div>
                  <div className="bg-white text-gray-700 p-6 text-center min-h-[160px]">
                    <p className="text-sm leading-relaxed italic">
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
