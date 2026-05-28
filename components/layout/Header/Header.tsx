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

const navItems = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Lutadores",
    href: "/fighters",
  },
  {
    label: "Contato",
    href: "/contact",
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(true);
  }

  function handleCloseMenu() {
    setOpenMenu(false);
  }

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
          component={Link}
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "inherit",
          }}
          aria-label="Ir para a página inicial"
        >
          <Image
            src="/logo.png"
            alt="Boxing Hub Logo"
            width={50}
            height={50}
          />

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
          component="nav"
          aria-label="Navegação principal"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 2,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              color="inherit"
              component={Link}
              href={item.href}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          color="inherit"
          aria-label="Abrir menu de navegação"
          onClick={handleOpenMenu}
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
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            backgroundColor: "#0d0d0d",
            color: "#fff",
          },
        }}
      >
        <Box
          component="nav"
          aria-label="Navegação mobile"
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
          {navItems.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              onClick={handleCloseMenu}
              sx={{
                color: "#fff",
                fontWeight: "bold",
                justifyContent: "flex-start",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
}