import React, { useState, useEffect } from "react";
import { Container, Label } from "semantic-ui-react";
import Product from "./Product";

export default function Dashboard() {
  return (
    <div>
      <Container fluid>
        <div className="bg-main">
          <Product />
        </div>
      </Container>
    </div>
  );
}
