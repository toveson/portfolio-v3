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
    <Stack style={{border: "1pt solid black"}}>
      <Stack direction="row">
        <Typography variant="h4">{currentPage}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="flex-end">
        <Stack direction="row" spacing={2}>
          {currentPage !== "Home" && (
            <Button
              variant="outlined"
              style={styles.button}
              onClick={() => setCurrentPage("Home")}
            >
              Home
            </Button>
          )}
          {currentPage !== "About" && (
            <Button
              variant="outlined"
              style={styles.button}
              onClick={() => setCurrentPage("About")}
            >
              About
            </Button>
          )}
          {currentPage !== "Projects" && (
            <Button
              variant="outlined"
              style={styles.button}
              onClick={() => setCurrentPage("Projects")}
            >
              Projects
            </Button>
          )}
          {currentPage !== "Contact" && (
            <Button
              variant="outlined"
              style={styles.button}
              onClick={() => setCurrentPage("Contact")}
            >
              Contact
            </Button>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}
