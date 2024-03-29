import AccountTreeIcon from "@mui/icons-material/AccountTree"
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import HomeIcon from "@mui/icons-material/Home"
import MenuIcon from "@mui/icons-material/Menu"
import PersonIcon from "@mui/icons-material/Person"
import {Drawer, IconButton, Stack, Tab, Tabs} from "@mui/material"
import React, {Dispatch, SetStateAction, useState} from "react"

export interface navBarProps {
  currentPage: string
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export const NavBar: React.FC<navBarProps> = (props) => {
  const {currentPage, setCurrentPage} = props
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const buttons = [
    {label: "Home", icon: <HomeIcon />},
    {label: "About", icon: <PersonIcon />},
    {label: "Projects", icon: <AccountTreeIcon />},
    {label: "Resume", icon: <AssignmentIndIcon />},
    {label: "Contact", icon: <ContactMailIcon />}
  ]

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setCurrentPage(newValue)
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleTabClick = () => {
    setIsDrawerOpen(false)
  }

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack
        style={{
          justifyContent: "center",
          marginLeft: "1rem"
        }}
      >
        {currentPage === "Home" && <HomeIcon fontSize="large" />}
        {currentPage === "About" && <PersonIcon fontSize="large" />}
        {currentPage === "Projects" && <AccountTreeIcon fontSize="large" />}
        {currentPage === "Resume" && <AssignmentIndIcon fontSize="large" />}
        {currentPage === "Contact" && <ContactMailIcon fontSize="large" />}
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        <IconButton
          onClick={toggleDrawer}
          sx={{display: {xs: "block", sm: "none", md: "none", lg: "none"}}}
        >
          <MenuIcon />
        </IconButton>
        <Tabs
          onChange={handleChange}
          value={currentPage}
          sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "block",
              lg: "block"
            }
          }}
        >
          {buttons.map((button) => (
            <Tab label={button.label} value={button.label} key={button.label} />
          ))}
        </Tabs>

        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <Tabs
            onChange={handleChange}
            value={currentPage}
            orientation="vertical"
          >
            {buttons.map((button) => (
              <Tab
                label={button.label}
                value={button.label}
                key={button.label}
                icon={button.icon}
                onClick={handleTabClick}
              />
            ))}
          </Tabs>
        </Drawer>
      </Stack>
    </Stack>
  )
}
