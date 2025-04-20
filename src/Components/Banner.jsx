import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/banner/01.jpg";
import img2 from "../assets/banner/02.jpg";
import img3 from "../assets/banner/03.png";
import img4 from "../assets/banner/04.jpg";
import img5 from "../assets/banner/05.png";
import img6 from "../assets/banner/06.png";

export default function Banner() {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <Carousel>
        {images.map((img, index) => (
          <div
            key={index}
            className="flex justify-center xl:h-[500px] 2xl:h-[700px]"
          >
            <img src={img} />
          </div>
        ))}
        {/* <div className="flex justify-center xl:h-[500px] 2xl:h-[700px]">
          <img src={img1} />
        </div>
        <div className="flex justify-center xl:h-[500px] 2xl:h-[700px]">
          <img src={img2} />
        </div>
        <div className="flex justify-center xl:h-[500px] 2xl:h-[700px]">
          <img src={img3} />
        </div>
        <div className="flex justify-center xl:h-[500px] 2xl:h-[700px]">
          <img src={img4} />
        </div>
        <div className="flex justify-center xl:h-[500px] 2xl:h-[700px]">
          <img src={img5} />
        </div>
        <div className="flex justify-center xl:h-[500px] 2xl:h-[700px]">
          <img src={img6} />
        </div> */}
      </Carousel>
    </div>
  );
}
