import {Card, CardContent} from "@mui/material"
import {useEffect, useRef, useState} from "react"

export interface MainContainerProps {
  content: any
  fullWidth?: boolean
}

export const MainContainer: React.FC<MainContainerProps> = (props) => {
  const {content, fullWidth} = props
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)

  useEffect(() => {
    const containerElement = containerRef.current

    const handleResize = () => {
      if (containerElement) {
        setHasOverflow(
          containerElement.scrollHeight > containerElement.clientHeight
        )
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
        style={fullWidth ? {width: "75vw"} : {maxWidth: "75vw"}}
        // adds margin to the top and bottom when there is overflow
        sx={hasOverflow ? {mt: 45, mb: 10} : {}}
      >
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  )
}
