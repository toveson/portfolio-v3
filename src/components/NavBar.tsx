import MenuIcon from "@mui/icons-material/Menu"
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
    {label: "Home"},
    {label: "About"},
    {label: "Projects"},
    {label: "Resume"},
    {label: "Contact"}
  ]

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentPage(newValue)
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleTabClick = () => {
    setIsDrawerOpen(false)
  }

  return (
    <Stack direction="row" justifyContent="right">
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
          sx={{display: {xs: "none", sm: "block", md: "block", lg: "block"}}}
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
                onClick={handleTabClick}
              />
            ))}
          </Tabs>
        </Drawer>
      </Stack>
    </Stack>
  )
}
