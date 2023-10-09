import {Card, CardContent} from "@mui/material"
import {useEffect, useRef, useState} from "react"

export interface MainContainerProps {
  content: any
  fullWidth?: boolean
}

export const MainContainer: React.FC<MainContainerProps> = (props) => {
  const {content, fullWidth} = props
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState<boolean>(false)
  const [screenWidth, setScreenWidth] = useState<string>("75vw")

  useEffect(() => {
    const containerElement = containerRef.current

    const handleResize = () => {
      if (containerElement) {
        setHasOverflow(
          containerElement.scrollHeight > containerElement.clientHeight
        )
      }
    }

    const handleWidthChange = () => {
      const currentScreenWidth = window.innerWidth
      if (currentScreenWidth > 900) {
        setScreenWidth("75vw")
      } else {
        setScreenWidth("85vw")
      }
    }

    handleResize()
    handleWidthChange()

    window.addEventListener("resize", handleResize)
    window.addEventListener("resize", handleWidthChange)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("resize", handleWidthChange)
    }
  }, [])

  console.log(screenWidth)

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        backgroundColor: "gray",
        overflow: "auto",
        padding: "0"
      }}
    >
      <Card
        raised={true}
        style={fullWidth ? {width: screenWidth} : {maxWidth: screenWidth}}
        // adds margin to the top and bottom when there is overflow
        sx={hasOverflow ? {mt: 45, mb: 10} : {}}
      >
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  )
}
