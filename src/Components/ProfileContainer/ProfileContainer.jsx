import React from "react";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import profile from "../../Asset/profile.png";
import styles from "./ProfileContainer.module.css";

function ProfileContainer({ success, error, children, title }) {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.imgContainer + " rounded-top"}>
          <Card.Img className={styles.img} variant="top" src={profile} />
          <Form.Text className={styles.phoneNumber + " mt-3"}>
            {title}
          </Form.Text>
        </div>
        <Card.Body>
          <Alert
            hidden={!error}
            style={{ textAlign: "center" }}
            variant={"danger"}
          >
            {error}
          </Alert>
          <Alert
            hidden={!success}
            style={{ textAlign: "center" }}
            variant={"success"}
          >
            {success}
          </Alert>
          {children}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileContainer;
