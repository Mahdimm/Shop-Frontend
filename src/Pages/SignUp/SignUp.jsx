import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import * as api from "../../Services/Api.service";
import styles from "./SignUp.module.css";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  return (
    <div className={styles.container}>
      <Card className={styles.cardLogin}>
        <Alert hidden={!error} style={{ textAlign: "center" }} variant="danger">
          {error}
        </Alert>
        <Card.Body>
          <Form.Group>Choose a user name and password to sign up</Form.Group>
          <Form.Group>
            <Form.Control
              type="Text"
              placeholder="Username"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="Password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="Password"
              placeholder="Confirm Password"
              onChange={(event) => setPasswordConfirm(event.target.value)}
            />
          </Form.Group>
          <Button
            className={styles.btnLog}
            variant="primary"
            onClick={() => {
              if (password !== passwordConfirm)
                setError("Passwords are not the same");
              else
                api
                  .register({
                    email,
                    password,
                  })
                  .then((json) => {
                    props.history.push("/login");
                  })
                  .catch((err) => setError("Failed to sign up!"));
            }}
          >
            Signup
          </Button>
          <Link className={styles.loginAdmin} to="/login">
            Login
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
