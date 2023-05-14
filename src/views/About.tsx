import {Card, CardContent, Stack, Typography} from "@mui/material"

export const About = () => {
  return (
    // TODO: this will be an about me
    <div
      style={{display: "flex", justifyContent: "center", paddingTop: "40px"}}
    >
      <Card style={{maxWidth: "75vw"}}>
        <CardContent>
          <Stack>
            <Typography>Hi there!</Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  )
}
