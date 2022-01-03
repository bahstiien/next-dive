import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import EventNoteIcon from "@mui/icons-material/EventNote";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import style from "../styles/Swiper.module.css";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
import Slide from "./slide";

// install Swiper modules
SwiperCore.use([EffectCards]);

export default function App() {
  return (
    <div className="flex justify-center items-center">
      <div className={style.swiper}>
        <Swiper effect={"cards"} grabCursor={true}>
          <SwiperSlide className={style.swiperslide}>
            <EventNoteIcon fontSize="large" className="mt-4" />
            <Slide
              title="Search"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sed eros eu vehicula."
            />
            {/* <Image src={Dive} alt="diver" /> */}
          </SwiperSlide>
          <SwiperSlide className={style.swiperslide}>
            <EventNoteIcon fontSize="large" className="mt-4" />
            <Slide
              title="Booking"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sed eros eu vehicula."
            />
            {/* <Image src={Booking} alt="diver" className="rounded-xs m-2" /> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
