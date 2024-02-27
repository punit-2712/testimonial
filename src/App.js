import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: `Sagar Ahuja`,
    img: `https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg`,
    review: `Ankur Warriko's 'Make Epic Money' is a game-changer! Practical strategies for financial freedom.`,
    stars: 4,
  },
  {
    name: `Rajat Sethi`,
    img: `https://t4.ftcdn.net/jpg/03/25/08/73/360_F_325087319_uOoRsrTSNtVpHeV1ogQKCyUwd6YfU3hF.webp`,
    review: `Easy read! 'Make Epic Money' by Ankur Warriko simplifies complex finance concepts.`,
    stars: 5,
  },
  {
    name: `Aditya Sharma`,
    img: `https://img.freepik.com/premium-photo/young-handsome-man-isolated-background_1368-449512.jpg`,
    review: `"Wow! 'Make Epic Money' by Ankur Warriko is a treasure trove of innovative money-making ideas. "`,
    stars: 4,
  },
  {
    name: `Arsh Atwal`,
    img:"https://static.life.ru/publications/2022/4/22/664291136302.7346.jpg",
    review: "Incredible! 'Make Epic Money' is a blueprint for financial success.",
    stars: 5,
  },
  {
    name: `Aakash Shinde`,
    img: `https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=6&m=1200677760&s=612x612&w=0&h=IXURU5rnCRyN5h5ebeDLQcVv0lNs0ZLgE98fPioSMnQ=`,
    review: "This is a wonderful book for anyone who wants to understand and plan their personal financial management.",
    stars: 4,
  },
];

function App() {
  const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3, 
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 2000, 
};

  
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        settings.slidesToShow = 1;
      } else if (window.innerWidth < 1024) {
        settings.slidesToShow = 2;
      } else {
        settings.slidesToShow = 3;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-3/4 m-auto">
  
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[500px] text-black rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div key={d.name} className="h-56 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: "#07E305" }}>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4 h-72">
                {/* Ensure consistent height */}
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center h-20 overflow-hidden">{d.review}</p>
                <div className="flex justify-center items-center">
                  {[...Array(d.stars)].map((_, index) => (
                    <span key={index} className="text-yellow-500" style={{ fontSize: "30px" }}>
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
