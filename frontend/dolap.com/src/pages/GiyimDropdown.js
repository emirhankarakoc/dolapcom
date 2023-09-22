import React, { useState } from "react";
import { Button, Card, Dropdown, Grid, Image, Label } from "semantic-ui-react";

export default function GiyimDropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn bg-giyim">GIYIM</button>
      <div className="dropdown-content">
        <a href="#"> </a>

        <Grid>
        <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic href="https://dolap.com/ust-giyim">
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/94.png"
                  
                  size="mini"
                  centered
                />
                <Label basic> Üst Giyim</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic href="https://dolap.com/alt-giyim">
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/105.png"
                  size="mini"
                  centered
                />
                <Label basic> Alt Giyim</Label>
              </Button>
            </Grid.Column>
            <Grid.Column width={4} floated="left">
              <Button basic href="https://dolap.com/elbise">
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/126.png"
                  size="mini"
                  centered
                />
                <Label basic> Elbise</Label>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic href="https://dolap.com/dis-giyim">
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/115.png"
                  size="mini"
                  centered
                />
                <Label basic>Dış Giyim</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic href="https://dolap.com/plaj-giyim">
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/370.png"
                  size="mini"
                  centered
                />
                <Label basic> Plaj Giyim</Label>
              </Button>
            </Grid.Column>
            <Grid.Column width={4} floated="left">
              <Button basic href="https://dolap.com/ev-giyim"> 
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/374.png"
                  size="mini"
                  centered
                />
                <Label basic> Ev Giyim</Label>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/34000.png"
                  size="mini"
                  centered
                />
                <Label basic> İkili Takım</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
             
            </Grid.Column>
            <Grid.Column width={4} floated="left">
             </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    </div>
  );
}
