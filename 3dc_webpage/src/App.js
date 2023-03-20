import "./App.css";

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";

import { useState } from "react";

const sxFooter = {
  minHeight: "200px",
  height: "auto",
  background: "rgba(5, 22, 85, 0.57)",
  padding: "10px",
};

function App() {
  const [Page, setPage] = useState("Home");
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const generatePage = () => {
    if (Page === "Home") {
      return <Home />;
    }
  };

  return (
    <>
      <div style={{}}>
        <div>
          <Navbar Page={Page} setPage={setPage} />
        </div>

        <div>{generatePage()}</div>

        <div style={sxFooter}>
          <div
            style={{
              fontSize: "24px",
              color: "white",
              textAlign: "center",
            }}
          >
            <div
              style={{ fontSize: "24px", color: "white", textAlign: "center" }}
            >
              <div>Contact us</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ margin: "0px 10px" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/instagram_logo.png`}
                    alt="instagram"
                  />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ margin: "0px 10px" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/facebook_logo.png`}
                    alt="facebook"
                  />
                </a>
                <a
                  href="https://www.gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ margin: "0px 10px" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/gmail_logo.png`}
                    alt="gmail"
                  />
                </a>
              </div>
              <div>Sign up for your newsletter:</div>
              <div>
                <input
                  style={{
                    fontSize: "0.8em",
                    width: "400px",
                    borderRadius: "10px",
                    border: "none",
                    textAlign: "center",
                  }}
                  type="email"
                  placeholder="Enter your email address here"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div
              style={{
                textAlign: "left",
                color:'black',
                fontSize:'0.35em',
                width:'20%'
              }}
            >
              Disclaimer <br />
              DSC 3DC is an independent group, the activities and opinions express by the group should in no way be linked to Google, the corporation
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
