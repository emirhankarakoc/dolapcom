import React from "react";
import {
  Menu,
  Image,
  Button,
  Label,
  MenuItem,
  Grid,
  Container,
  Input,
  GridColumn,
} from "semantic-ui-react";

export default function Navbar2() {
  return (
    <div>
        <Container fluid>
          <Grid>
            <Grid.Row>
            <GridColumn width={4} color="purple">
                GIYIM
              </GridColumn>
              <GridColumn width={4} color="green">
                ÇANTA
              </GridColumn>
              <GridColumn width={4} color="red">
                AYAKKABI
              </GridColumn>
              <GridColumn width={4} color="yellow">
                AKSESUAR
              </GridColumn>
            </Grid.Row>
          </Grid>
        </Container>

    </div>
  )
}
