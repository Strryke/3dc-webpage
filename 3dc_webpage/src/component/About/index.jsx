import React from "react";
import YouTube from "react-youtube";

function index() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        textAlign: "center",
        fontFamily: "Google Sans",
        fontSize: "28px",
        margin: "50px auto",
      }}
    >
      <div style={{ fontSize: "55px" }}>About Us</div>
      <div>
        Digital Design & Development Club (3DC) is an official Fifth-Row club
        affiliated with{" "}
        <a href="https://istd.sutd.edu.sg/">ISTD Pillar at SUTD</a>. We are also
        a{" "}
        <a href="https://developers.google.com/community/gdsc">
          Developer Student Club (DSC)
        </a>
        supported by Google.
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "60px",
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
      <div style={{ fontSize: "55px" }}>Our Vision</div>
      <div>
        We are committed to nuture a strong developer culture within SUTD
      </div>
      <br />
      <div style={{ fontSize: "55px" }}>Our Mission</div>
      <div>To support and develop student learning</div>
    </div>
  );
}

export default index;
