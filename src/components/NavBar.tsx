import {Stack, Tab, Tabs} from "@mui/material"
import React, {Dispatch, SetStateAction} from "react"

export interface navBarProps {
  currentPage: string
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export const NavBar: React.FC<navBarProps> = (props) => {
  const {currentPage, setCurrentPage} = props

  const buttons = [
    {label: "Home", value: "Home"},
    {label: "About", value: "About"},
    {label: "Projects", value: "Projects"},
    {label: "Resume", value: "Resume"},
    {label: "Contact", value: "Contact"}
  ]

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentPage(newValue)
  }

  return (
    <Stack
      direction="row"
      style={{borderBottom: "1pt solid black"}}
      justifyContent="right"
    >
      <Stack direction="row" justifyContent="flex-end">
        <Tabs onChange={handleChange} value={currentPage}>
          {buttons.map((button) => (
            <Tab label={button.label} value={button.value} key={button.value} />
          ))}
        </Tabs>
      </Stack>
    </Stack>
  )
}
