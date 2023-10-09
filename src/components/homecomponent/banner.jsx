import { Swiper, SwiperSlide } from "swiper/react";
import spidermanBanner from "../../assets/spiderman-banner.png";
import "swiper/css";

function Banner() {
  return (
    <section id="banner" className="px-40 pt-48">
      <div className="text-container">
        <h1 className="font-semibold text-3xl">Recommended for you</h1>
        <p className=" pt-5 text-base leading-[120%]">
          We sort everything based on your recently played games
        </p>
      </div>
      <div className="container">
        <div className="pt-14">
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                className="bg-cover"
                src={spidermanBanner}
                alt="spiderman.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Banner;
