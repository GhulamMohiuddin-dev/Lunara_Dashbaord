import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { listItems, scenarioItems } from "../dummyData/index";
import {
  SidebarContainer,
  TopBox,
  Logo,
  ScenarioBox,
  ScenarioTitle,
  FooterBox,
  FooterItem,
  FooterText,
  UserCard,
  UserIcon,
  UserInfo,
  UserName,
  UserRole,
} from "../styles/styles";
import withPermissions from '../HOC/WithPermissions';


const Sidebar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<
    number | null
  >(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleScenarioClick = (index: number) => {
    setSelectedScenarioIndex(index);
  };

  const drawer = (
    <SidebarContainer>
      <Box>
        <TopBox>
          <Box display="flex" alignItems="left">
            <Logo src="/images/Lunara-logo.svg" alt="Lunara Logo" />
          </Box>
          <List
            component="nav"
            style={{
              width: "192px",
              height: "130px",
              gap: "8px",
              paddingLeft: "30px",
            }}
          >
            {listItems.map((item, index) => (
              <ListItem
                component="a"
                href={item.href}
                onClick={() => handleClick(index)}
                key={index}
                style={{
                  backgroundColor:
                    selectedIndex === index ? "#212121" : "transparent",
                  borderRadius: "5px",
                }}
              >
                <Box display="flex" alignItems="center" gap="10px">
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                    }}
                  >
                    <img src={item.icon} alt={`${item.text} Icon`} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: {
                        color: selectedIndex === index ? "#FFFFFF" : "#9B9B9B",
                        fontSize: "12px",
                      },
                    }}
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </TopBox>
        <ScenarioBox>
          <Box
            display="flex"
            justifyContent="space-between"
            textAlign="center"
            alignItems="center"
          >
            <ScenarioTitle>Linked Scenarios</ScenarioTitle>
            <img src="/images/plusButton.svg" alt="Add Scenario" />
          </Box>

          <List component="nav">
            {scenarioItems.map((item, index) => (
              <ListItem
                component="a"
                href={item.href}
                style={{
                  backgroundColor:
                    selectedScenarioIndex === index ? "#212121" : "transparent",
                  borderRadius: "5px",
                }}
                onClick={() => handleScenarioClick(index)}
                key={index}
              >
                <Box display="flex" alignItems="center" gap="10px">
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                    }}
                  >
                    <img src={item.icon} alt="Scenario Icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: {
                        color:
                          selectedScenarioIndex === index
                            ? "#FFFFFF"
                            : "#9B9B9B",
                        fontSize: "12px",
                      },
                    }}
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </ScenarioBox>
      </Box>
      <FooterBox>
        <FooterItem>
          <img src="/images/Bank.svg" alt="Lunara Banking" />
          <FooterText>Lunara Banking</FooterText>
        </FooterItem>
        <FooterItem>
          <img src="/images/upgrade.svg" alt="Upgrade" />
          <FooterText>Upgrade to plus</FooterText>
          <Box display="flex" alignItems="center">
            <FooterText
              style={{
                color: "#FFA500",
                backgroundColor: "#333333",
                padding: "2px 6px",
                borderRadius: "4px",
                marginLeft: "8px",
              }}
            >
              New
            </FooterText>
          </Box>
        </FooterItem>
        <UserCard>
          <Box display="flex" alignItems="center">
            <UserIcon src="/images/Solace.svg" alt="User Icon" />
            <UserInfo>
              <UserName>Solace</UserName>
              <UserRole>Salena James</UserRole>
            </UserInfo>
          </Box>
          <img src="/images/Arrow.svg" alt="Expand" />
        </UserCard>
      </FooterBox>
    </SidebarContainer>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: "fixed",
          top: 20,
          left: 16,
          zIndex: 1300,
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            zIndex: 1200,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            zIndex: 1200,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default withPermissions(Sidebar,'Sidebar');
