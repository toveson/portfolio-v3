import {Card, CardContent} from "@mui/material"

export interface MainContainerProps {
  content: any
}

export const MainContainer: React.FC<MainContainerProps> = (props) => {
  const {content} = props

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        backgroundColor: "gray"
      }}
    >
      <Card style={{maxWidth: "75vw"}}>
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  )
}
