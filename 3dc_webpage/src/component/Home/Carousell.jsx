import React, { useState } from "react";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const sxCaption = {
  fontFamily: "Google Sans",
  color: "white",
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translate(0%, -60%)",
  textAlign: "center",
  width: "300px",
  maxWidth: "30%",
  marginRight: "10%",
};

const sxOverlay = {
  backgroundColor: "red",
  background:
    "linear-gradient(90deg, rgba(255,255,255,0) 40%, rgba(0,0,0,0.9) 68%)",
  opacity: 1,
  paddingTop: "48.61%",
  position: "absolute",
  top: 0,
  zIndex: 5,
};

const images = [
  `${process.env.PUBLIC_URL}/home_carousell_0.png`,
  `${process.env.PUBLIC_URL}/home_carousell_1.png`,
  `${process.env.PUBLIC_URL}/home_carousell_2.png`,
];

function CarousellAnnouncement() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isLeftArrowHovering, setIsLeftArrowHovering] = useState(false);
  const [isRightArrowHovering, setIsRightArrowHovering] = useState(false);

  const sxCarouselControlPrev = {
    position: "absolute",
    top: "50%",
    left: "2%",
    zIndex: 10,
    color: "white",
    opacity: isLeftArrowHovering ? 1 : 0.5,
    transition: "opacity 0.3s ease-in-out",
  };

  const sxCarouselControlNext = {
    position: "absolute",
    top: "50%",
    right: "2%",
    zIndex: 10,
    color: "white",
    opacity: isRightArrowHovering ? 1 : 0.5,
    transition: "opacity 0.3s ease-in-out",
  };
  const handlePrev = () => {
    const index = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };

  const handleNext = () => {
    const index = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/home_carousell_${activeIndex}.png)`,
            backgroundSize: "cover",
            height: 0,
            paddingTop: "48.61%",
          }}
        />

        <div className="d-block w-100" style={sxOverlay}>
          <div style={sxCaption}>
            <h2
              style={{
                fontSize: "2.5em",
                fontWeight: 500,
                letterSpacing: 0,
                lineHeight: "46px",
              }}
            >
              Biweekly newsletter
            </h2>
            <p>
              Interested in a tech career but unsure of the path? Fret not, stay
              updated on the latest trends from industry experts
            </p>
          </div>
        </div>

        {/* <div
          style={sxCarouselControlPrev}
          onMouseEnter={() => setIsLeftArrowHovering(true)}
          onMouseLeave={() => setIsLeftArrowHovering(false)}
        >
          <ArrowBackIosIcon
            onClick={handlePrev}
            style={{
              fontSize: "5em",
            }}
          />
        </div>

        <div
          style={sxCarouselControlNext}
          onMouseEnter={() => setIsRightArrowHovering(true)}
          onMouseLeave={() => setIsRightArrowHovering(false)}
        >
          <ArrowForwardIosIcon
            onClick={handleNext}
            style={{
              fontSize: "5em",
            }}
          />

        </div> */}
      </div>
    </>
  );
}

export default CarousellAnnouncement;
