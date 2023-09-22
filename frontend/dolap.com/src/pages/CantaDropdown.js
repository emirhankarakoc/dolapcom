import React from 'react'
import {Button,Label,Grid,Image} from 'semantic-ui-react'

export default function CantaDropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn bg-canta">CANTA</button>
      <div className="dropdown-content">
        <a href="#"> </a>

        <Grid>
        <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/78.png"
                  size="mini"
                  centered
                />
                <Label basic> Kol Çantası</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/82.png"
                  size="mini"
                  centered
                />
                <Label basic> Askılı Çanta</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/74.png"
                  size="mini"
                  centered
                />
                <Label basic> Sırt Çantası</Label>
              </Button>
            </Grid.Column>
            </Grid.Row>
        



                        <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/76.png"
                  size="mini"
                  centered
                />
                <Label basic> Cüzdan</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/77.png"
                  size="mini"
                  centered
                />
                <Label basic> Portföy/El Çantası</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/81.png"
                  size="mini"
                  centered
                />
                <Label basic> Plaj Çantası</Label>
              </Button>
            </Grid.Column>
            </Grid.Row>
       



                        <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/80.png"
                  size="mini"
                  centered
                />
                <Label basic> Makyaj Çantası</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/75.png"
                  size="mini"
                  centered
                />
                <Label basic> Valiz / Bavul</Label>
              </Button>
            </Grid.Column>

            <Grid.Column width={4} floated="left">
              <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/513.png"
                  size="mini"
                  centered
                />
                <Label basic> Sırt Çantası</Label>
              </Button>
            </Grid.Column>
            </Grid.Row>
            
            



                        <Grid.Row columns={12}>
            <Grid.Column width={4} floated="right">
                           <Button basic>
                <Image
                  src="https://dolap.dsmcdn.com/dolap/common/category/83.png"
                  size="mini"
                  centered
                />
                <Label basic> Diğer</Label>
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
  )
}
