import React from 'react'

import {Grid, Button,Image,Label} from 'semantic-ui-react'

export default function AksesuarDropdown() {
  return (
    <div className="dropdown" color="red">
      <button className="dropbtn bg-aksesuar">AKSESUAR</button>
      <div className="dropdown-content">
        <a href="#"> </a>

        <Grid>
        <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/86.png"
                  size="mini"
                  centered
                />
                <Label basic> Gözlük</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/85.png"
                  size="mini"
                  centered
                />
                <Label basic> Saat</Label>
              </Button>
            </Grid.Column>
            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/91.png"
                  size="mini"
                  centered
                />
                <Label basic> Takı</Label>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/87.png"
                  size="mini"
                  centered
                />
                <Label basic> Kemer</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/88.png"
                  size="mini"
                  centered
                />
                <Label basic> Şal/Eşarp</Label>
              </Button>
            </Grid.Column>
            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/135.png"
                  size="mini"
                  centered
                />
                <Label basic> Eldiven</Label>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/133.png"
                  size="mini"
                  centered
                />
                <Label basic> Atkı</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/134.png"
                  size="mini"
                  centered
                />
                <Label basic> Bere</Label>
              </Button>
            </Grid.Column>
            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/89.png"
                  size="mini"
                  centered
                />
                <Label basic> Şapka</Label>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/90.png"
                  size="mini"
                  centered
                />
                <Label basic> Saç Aksesuarları</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/362.png"
                  size="mini"
                  centered
                />
                <Label basic> Çorap</Label>
              </Button>
            </Grid.Column>
            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/92.png"
                  size="mini"
                  centered
                />
                <Label basic> Diğer</Label>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/629.png"
                  size="mini"
                  centered
                />
                <Label basic> Gelin Buketi</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/34950.png"
                  size="mini"
                  centered
                />
                <Label basic> Şemsiye</Label>
              </Button>
            </Grid.Column>
            <Grid.Column width={4} floated="left">

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}
