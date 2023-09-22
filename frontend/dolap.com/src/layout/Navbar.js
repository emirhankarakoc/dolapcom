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
import AyakkabiDropdown from "../pages/AyakkabiDropdown.js";
import CantaDropdown from "../pages/CantaDropdown.js";
import GiyimDropdown from "../pages/GiyimDropdown.js";
import AksesuarDropdown from "../pages/AksesuarDropdown.js";

export default function Navbar() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Menu fixed="top">
              <Container>
                <Menu.Menu position="left">
                  <Menu.Item className="borderless">
                    <Image
                      src="https://cdn.dolap.com/web/images/logo-5.svg"
                      size="small"
                    />
                  </Menu.Item>
                </Menu.Menu>

                <Menu.Item
                  position="center"
                  className="searchboxSolaYatir borderless"
                >
                  <Input
                    icon="search"
                    placeholder="Ürün, @üye, #etiket ara"
                    size="big"
                  />
                </Menu.Item>

                <Menu.Item className="borderless" link="https://google.com">
                  Markalar
                </Menu.Item>
                <Menu.Item className="borderless" link="https://google.com">
                  GİRİŞ YAP
                </Menu.Item>
              </Container>
            </Menu>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Container position="sticky" fluid className="afterMenu">
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <GiyimDropdown />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <CantaDropdown />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <AyakkabiDropdown />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <AksesuarDropdown />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
