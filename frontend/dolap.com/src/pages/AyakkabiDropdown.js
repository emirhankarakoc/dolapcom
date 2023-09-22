import React, { useState } from "react";
import { Card, Dropdown, Grid, Image, Button, Label } from "semantic-ui-react";

export default function AyakkabiDropdown() {
  return (
    <div className="dropdown" color="red">
      <button className="dropbtn bg-ayakkabi">AYAKKABI</button>
      <div className="dropdown-content">
        <a href="#"> </a>

        <Grid>
          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/67.png"
                  size="mini"
                  centered
                />
                <Label basic> Spor Ayakkabı</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/64.png"
                  size="mini"
                  centered
                />
                <Label basic> Babet</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/70.png"
                  size="mini"
                  centered
                />
                <Label basic> İnce Topuklu</Label>
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/69.png"
                  size="mini"
                  centered
                />
                <Label basic> Kalın Topuklu</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/71.png"
                  size="mini"
                  centered
                />
                <Label basic> Dolgu Topuklu</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/72.png"
                  size="mini"
                  centered
                />
                <Label basic> Oxford/Loafer</Label>
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/68.png"
                  size="mini"
                  centered
                />
                <Label basic> Sandalet</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/132.png"
                  size="mini"
                  centered
                />
                <Label basic> Terlik</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/65.png"
                  size="mini"
                  centered
                />
                <Label basic> Bot</Label>
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/66.png"
                  size="mini"
                  centered
                />
                <Label basic> Çizme</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/34250.png"
                  size="mini"
                  centered
                />
                <Label basic> Topuklu Sandalet</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4} floated="left"></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
