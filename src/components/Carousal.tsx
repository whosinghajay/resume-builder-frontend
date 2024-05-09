import { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { Link } from "react-router-dom";

export default function Carousal() {
  const [swiperRef, setSwiperRef] = useState<any>(null); // check the type <Swiper | null> , do check for the Swiper inside <> it has some problem with the type , for now i have given the type any to it , yaad se check kariyo 
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef?.slideTo(swiperRef?.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  //   const slideTo = (index: number) => {
  //     swiperRef?.slideTo(index - 1, 0);
  //   };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination, Autoplay]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <Link to={"/createResume"}>{slideContent}</Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        {/* <button onClick={() => prepend()} className="prepend-2-slides">
          Prepend 2 Slides
        </button> */}
        {/* <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          Slide 500
        </button> */}
        {/* <button onClick={() => append()} className="append-slides">
          Append Slide
        </button> */}
      </p>
    </>
  );
}
