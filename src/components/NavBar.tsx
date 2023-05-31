import {Button, Stack, Typography} from "@mui/material"
import React, {Dispatch, SetStateAction} from "react"

export interface navBarProps {
  currentPage: string
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export const NavBar: React.FC<navBarProps> = (props) => {
  const {currentPage, setCurrentPage} = props

  const styles = {
    button: {
      width: "125px"
    }
  }

  return (
    <Stack
      direction="row"
      style={{border: "1pt solid black", padding: "15px"}}
      justifyContent="space-between"
    >
      <Stack direction="row">
        <Typography variant="h4">{currentPage}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="flex-end">
        <Stack direction="row" spacing={2}>
          <Button
            variant={currentPage === "Home" ? "contained" : "outlined"}
            style={styles.button}
            onClick={() => setCurrentPage("Home")}
          >
            Home
          </Button>
          <Button
            variant={currentPage === "About" ? "contained" : "outlined"}
            style={styles.button}
            onClick={() => setCurrentPage("About")}
          >
            About
          </Button>
          <Button
            variant={currentPage === "Projects" ? "contained" : "outlined"}
            style={styles.button}
            onClick={() => setCurrentPage("Projects")}
          >
            Projects
          </Button>
          <Button
            variant={currentPage === "Contact" ? "contained" : "outlined"}
            style={styles.button}
            onClick={() => setCurrentPage("Contact")}
          >
            Contact
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
