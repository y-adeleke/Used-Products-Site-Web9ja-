import React from "react";
import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cards = ({ image, title }) => {
  return (
    <Card
      style={{
        width: "25rem",
        height: "23rem",
        border: "none",
        margin: "10px",
        marginBottom: "20px",
      }}
    >
      {/* Grey background space for the image */}
      <div
        style={{
          height: "60%",
          backgroundColor: "#D9D9D9",
        }}
      ></div>

      <Card.Body>
        <Row>
          {/* Tiny circle */}
          <Col
            xs={2}
            className="profile-pic"
            style={{
              backgroundColor: "#D9D9D9", // Blackish-grey color
              borderRadius: "50%", // Circular shape
              width: "30px", // Adjust the width as needed
              height: "30px", // Same height as the title
            }}
          ></Col>

          {/* Card title */}
          <Col xs={10}>
            <Card.Title
              style={{
                backgroundColor: "#D9D9D9", // Light grey background color
                height: "30px", // Same height as the tiny circle
                width: "117%", // Adjust the width as needed
                margin: "0", // No margin
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px", // Optional: Add some border-radius
              }}
            >
              {title}
            </Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Cards;
