import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Card.Header style={{ backgroundColor: "#fff" }}>
          <h5>Technoop</h5>
          An online shopping site.
        </Card.Header>
        <Card.Body>
          <div style={{ fontSize: "12pt" }}>
            Created by{" "}
            {
              <i style={{ fontSize: "14pt", fontWeight: "400" }}>
                mahdi mahjoobi
              </i>
            }
            . summer 2020
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
