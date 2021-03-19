import React from "react";
import Container from "@material-ui/core/Container";
import HealthyFruits from "./Components/HealthyFruits";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <HealthyFruits />
      </Container>
    </React.Fragment>
  );
}
