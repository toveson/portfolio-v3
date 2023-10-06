import {Card, CardContent} from "@mui/material"
import {useEffect, useRef, useState} from "react"

export interface MainContainerProps {
  content: any
}

export const MainContainer: React.FC<MainContainerProps> = (props) => {
  const {content} = props
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)

  useEffect(() => {
    const containerElement = containerRef.current
    if (containerElement) {
      setHasOverflow(
        containerElement.scrollHeight > containerElement.clientHeight
      )
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
        style={{maxWidth: "75vw"}}
        // adds margin to the top and bottom when there is overflow
        sx={hasOverflow ? {mt: 18, mb: 4} : {}}
      >
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  )
}
