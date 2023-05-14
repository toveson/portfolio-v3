import {Button, Stack, Typography} from "@mui/material"
import React, {Dispatch, SetStateAction} from "react"

export interface appProps {
  currentPage: string
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export const NavBar: React.FC<appProps> = (props) => {
  const {currentPage, setCurrentPage} = props
  return (
    <Stack>
      <Stack direction="row">
        <Typography>{currentPage}</Typography>
      </Stack>
      
      <Stack direction="row" justifyContent="flex-end">
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => setCurrentPage("Home")}>
            Home
          </Button>
          <Button variant="outlined" onClick={() => setCurrentPage("About")}>
            About
          </Button>
          <Button variant="outlined" onClick={() => setCurrentPage("Projects")}>
            Projects
          </Button>
          <Button variant="outlined" onClick={() => setCurrentPage("Contact")}>
            Contact
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
