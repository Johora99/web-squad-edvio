import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SectionTitle from "../Shared/SectionTitle";
import "../../src/index.css";
import { IoLocation } from "react-icons/io5";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className=" p-4">
      <SectionTitle
        heading="Reviews"
        subHeading="Feedback from our AI-Powered Course Management System users"
      />

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiper.el.addEventListener("mouseenter", () =>
            swiper.autoplay.stop()
          );
          swiper.el.addEventListener("mouseleave", () =>
            swiper.autoplay.start()
          );
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 border border-tealGreen rounded-lg shadow-md bg-white w-80 h-60 flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold dark:text-gray-800 text-lg">
                    {review.name}
                  </h3>
                  <p className="text-yellow-400 mb-2">
                    {"⭐".repeat(review.stars)}
                  </p>
                  <p className="text-sm text-gray-500 flex gap-1 items-center">
                    <IoLocation />
                    {review.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 line-clamp-3">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
