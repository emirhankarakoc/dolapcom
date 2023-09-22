import React from "react";
import { Container, Grid, GridColumn, GridRow } from "semantic-ui-react";
import ResimGalerisi from "../pages/ResimGalerisi";
import UrunTarafi from "../pages/UrunTarafi";
import UstMenuUrunYolu from "../pages/UstMenuUrunYolu";
import { ResimGalerisi_2 } from "../pages/ResimGalerisi_2";
export default function Product() {
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <UstMenuUrunYolu/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={8}>
              <ResimGalerisi_2 />
            </Grid.Column>
            <Grid.Column width={8}>
              <UrunTarafi />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
