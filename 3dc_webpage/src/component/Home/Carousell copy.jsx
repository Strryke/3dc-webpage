import Carousel from "react-bootstrap/Carousel";

const sxCaption = {
  fontFamily: "Google Sans",
  color: "white",
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translate(-20%, -60%)",
  textAlign: "center",
  width: "300px",
  maxWidth: "30%",
};

const sxOverlay = {
  backgroundColor: "red",
  background:
    "linear-gradient(90deg, rgba(255,255,255,0) 50%, rgba(0,0,0,0.9) 68%)",
  opacity: 1,
  paddingTop: "48.61%",
  position: "absolute",
  top: 0,
  zIndex: 5,
};

function CarousellAnnouncement() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/home_carousell_1.png)`,
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
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/home_carousell_1.png)`,
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
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/home_carousell_1.png)`,
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
      </Carousel.Item>
    </Carousel>
  );
}

export default CarousellAnnouncement;
