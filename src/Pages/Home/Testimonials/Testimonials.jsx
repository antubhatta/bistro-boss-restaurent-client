import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import icon from "../../../assets/home/quote-left 1.svg";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="my-20">
      <SectionTitle
        heading={"---What Our Clients Say---"}
        subHeading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((reviews) => (
          <SwiperSlide key={reviews._id}>
            <div className="my-6 mx-24 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180, textAlign: "center" }}
                value={reviews.rating}
                readOnly
              />
              <img className="mt-12" src={icon} alt="" />
              <p className="text-[#444] mt-7 text-base">{reviews.details}</p>
              <h3 className="text-3xl text-[#CD9003] font-medium">
                {reviews.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
