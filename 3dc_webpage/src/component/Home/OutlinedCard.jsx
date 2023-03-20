import React from "react";

export default function OutlinedCard({
  imageUrl,
  when,
  where,
  message,
  learnMoreUrl,
  buyMerchUrl,
  signUpUrl,
  cardTitle
}) {
  return (
    <div>
      <div
        style={{
          borderRadius: "35px",
          border: "2px solid black",
          marginBottom: "20px",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          width: "300px",
          height: "450px",
          position: "relative",
          textAlign: "center",
          fontFamily: "Google Sans",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "20px",
          letterSpacing: "0em",
          margin: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "35px",
          }}
        />

        <div
          style={{
            position: "absolute",
            color: "white",
            width: "100%",
            height: "100%",
          }}
        >
          <div>
            <div style={{ marginBottom: "20px", marginTop: "40%" }}>{when}</div>
            <div style={{ marginBottom: "20px" }}>{where}</div>
            <div style={{ margin: "30px" }}>{message ? message : ""}</div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "70%",
              width: "100%",
            }}
          >
            {learnMoreUrl ? (
              <a
                href={learnMoreUrl}
                target="_blank"
                rel="noreferrer"
                style={{ outline: "none", color: "white" }}
              >
                Learn more
              </a>
            ) : (
              ""
            )}
          </div>

          <div
            style={{
              position: "absolute",
              top: "80%",
              width: "100%",
              fontSize: "20px",
            }}
          >
            {signUpUrl ? (
              <a
                href={signUpUrl}
                target="_blank"
                rel="noreferrer"
                style={{ outline: "none", color: "white" }}
              >
                Sign up
              </a>
            ) : (
              ""
            )}
            {buyMerchUrl ? (
              <a
                href={buyMerchUrl}
                target="_blank"
                rel="noreferrer"
                style={{ outline: "none", color: "white" }}
              >
                Buy now
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "Google Sans",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "24.0293px",
          lineHeight: "31px",
          marginBottom:'50px'
        }}
      >
        {cardTitle}
      </div>
    </div>
  );
}
