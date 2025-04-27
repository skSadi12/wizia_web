import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "/Logo.png";

function Navbarx() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const menuItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <div className="bg-[#002228]">
      <AppBar
        className="NavBar"
        position="static"
        sx={{
          backgroundColor: "#002228",
          color: "white",
          maxWidth: "1400px",
          marginX: "auto",
          backgroundImage: "url(bg.svg) ",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <div className="flex justify-between w-full items-center">
              <div>
                <img src={logo} alt="Logo" className="w-1/2" />
              </div>
              <div>
                <IconButton color="inherit" onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ flexGrow: 1 }}>
                <img src={logo} alt="Logo" className="text-[#0FF1F6] w-[19%]" />
              </Typography>
              <div className="flex gap-6 lg:gap-36 md:gap-6">
                <div className="flex ">
                  {menuItems.map((item) => (
                    <div>
                      <Button color="inherit" key={item}>
                        {item}
                      </Button>
                    </div>
                  ))}
                </div>
                <Typography>
                  <div className="flex gap-5">
                    <div>
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: "#0FF1F6",
                          color: "black",
                          borderRadius: "45px",
                          "&:hover": {
                            backgroundColor: "white",
                            border: "1px solid white",
                            color: "black",
                          },
                        }}
                      >
                        Book a Demo
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="outlined"
                        sx={{
                          color: "white",
                          border: "1px solid white",
                          borderRadius: "45px",
                          "&:hover": {
                            backgroundColor: "white",
                            border: "1px solid white",
                            color: "black",
                          },
                        }}
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </Typography>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List
          sx={{
            backgroundColor: "#1A1E1C",
            color: "white",
            backgroundImage: "url(bg.svg)",
          }}
        >
          <ListItem>
            <img src={logo} alt="Logo" />
          </ListItem>
          <hr />
          {menuItems.map((item) => (
            <ListItem key={item} onClick={() => setOpen(false)}>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
          <div className="flex-col">
            <ListItem>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#0FF1F6",
                  color: "black",
                  borderRadius: "45px",
                  "&:hover": {
                    backgroundColor: "white",
                    border: "1px solid white",
                    color: "black",
                  },
                }}
              >
                Book a Demo
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "45px",
                  "&:hover": {
                    backgroundColor: "white",
                    border: "1px solid white",
                    color: "black",
                  },
                }}
              >
                Contact Us
              </Button>
            </ListItem>
          </div>
          <ListItem onClick={() => setOpen(false)}></ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbarx;
