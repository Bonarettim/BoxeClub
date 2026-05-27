"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#0d0d0d",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Image src="/logo.png" alt="Boxing Hub Logo" width={50} height={50} />

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Boxing Hub
          </Typography>
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 2,
          }}
        >
          <Button color="inherit" component={Link} href="/">
            Inicio
          </Button>

          <Button color="inherit" component={Link} href="/fighters">
            Lutadores
          </Button>

          <Button color="inherit" component={Link} href="/contact">
            Contatos
          </Button>
        </Box>
        <IconButton
          color="inherit"
          onClick={() => setOpenMenu(true)}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0d0d0d",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            p: 3,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0d0d0d",
            color: "#fff",
            gap: 2,
          }}
        >
          <Button
            component={Link}
            href="/"
            onClick={() => setOpenMenu(false)}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              justifyContent: "flex-start",
            }}
          >
            Inicio
          </Button>

          <Button
            component={Link}
            href="/fighters"
            onClick={() => setOpenMenu(false)}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              justifyContent: "flex-start",
            }}
          >
            LUTADORES
          </Button>

          <Button
            component={Link}
            href="/contact"
            onClick={() => setOpenMenu(false)}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              justifyContent: "flex-start",
            }}
          >
            CONTATOS
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
