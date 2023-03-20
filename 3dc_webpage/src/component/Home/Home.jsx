import React, { useState } from "react";
import CarousellAnnouncement from "./Carousell";
import OutlinedCard from "./OutlinedCard";
import YouTube from "react-youtube";

const sxContainer = {
  fontFamily: "Google Sans",
  fontSize: "45px",
  fontWeight: "400",
  lineHeight: "57px",
  letterSpacing: "0em",
  textAlign: "center",
  backgroundColor: "black",
};

function Home() {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      
      <div style={sxContainer}>
        <div
          style={{
            position: "relative",
            backgroundColor: "black",
            height: "600px",
            
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              zIndex:100,
              left: "50%",
              transform: "translateX(-50%)"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={`${process.env.PUBLIC_URL}/home_3dc_logo_colour.png`}
              alt="3dc_logo_no_color"
              style={{
                display: "block",
                margin: "0 auto",
                transition: "all 0.5s ease",
                opacity: hovered ? 1 : 0,
                zIndex: 100,
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-47.95%)"
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/home_3dc_logo_no_colour.png`}
              alt="3dc_logo_colour"
              style={{
                display: "block",
                margin: "0 auto",
                transition: "all 0.5s ease",
                opacity: 1,
                
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ ...sxContainer, color: "black", backgroundColor: "white" }}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/home_sponsors.png`}
            alt="sponsor"
          />
        </div>
        <div>Learn Web Development and Machine Learning with us</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OutlinedCard
          imageUrl={`${process.env.PUBLIC_URL}/home_card_projects.png`}
          when={"1pm, 29 Apr 2023"}
          where={"i3 Lab (1.605)"}
          message={
            "Learn to create your very own VR game and tinker with VR equipment"
          }
          learnMoreUrl="projects"
          signUpUrl="sign_up/projects"
          cardTitle="Projects"
        />
        <OutlinedCard
          imageUrl={`${process.env.PUBLIC_URL}/home_card_student_lead_workshops.png`}
          when={"1pm, 29 Apr 2023"}
          where={"i3 Lab (1.605)"}
          message={"Learn a new way to greet the world using just Python"}
          learnMoreUrl={"workshops"}
          signUpUrl="sign_up/workshops"
          cardTitle="Student Lead Workshops"
        />
        <OutlinedCard
          imageUrl={`${process.env.PUBLIC_URL}/home_card_merch.png`}
          buyMerchUrl={"buy_merch"}
          cardTitle="Merch"
        />
        <OutlinedCard
          imageUrl={`${process.env.PUBLIC_URL}/home_card_events.png`}
          when="1pm, 29 Apr 2023"
          where="Where:i3 Lab (1.65)"
          learnMoreUrl={"events"}
          signUpUrl="sign_up/events"
          cardTitle="Events"
        />
      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?src=3dcsutd%40gmail.com&ctz=Asia%2FSingapore"
          title="calendar"
          style={{
            border: 0,
            width: "800px",
            height: "600px",
            frameborder: "0",
            scrolling: "no",
          }}
        ></iframe>
        <div
          style={{
            position: "absolute",
            top: "30%",
            width: "100%",
            color: "black",
            fontFamily: "Google Sans",
            fontSize: "45px",
            fontWeight: 400,
            lineHeight: "57px",
            letterSpacing: "0em",
          }}
        >
          A quick heads up for the month!
        </div>
      </div>

      <CarousellAnnouncement />

      <div
        style={{
          textAlign: "center",
          margin: "100px",
        }}
      >
        <YouTube
          videoId={"DcN_hcHXR_0"}
          opts={{
            height: "565px",
            width: "661px",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>
    </div>
  );
}
export default Home;
