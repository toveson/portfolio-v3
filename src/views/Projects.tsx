import { Card, Stack, CardMedia, Typography, Tooltip, Button } from "@mui/material"
import {MainContainer} from "../components/MainContainer"

export const Projects: React.FC = (props) => {
  return (
    <MainContainer
      content={
        <>
          <Card
            raised={true}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            <Stack
              direction={{
                xs: "column",
                md: "row"
              }}
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <CardMedia
                // alt={cardInfo.altImg}
                component="img"
                // image={cardInfo.img}
                sx={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "250px",
                  width: "250px"
                }}
              />
              <Stack
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                spacing={2}
              >
                <Typography variant="body1">Some Text</Typography>
                <Tooltip title={"cardInfo.tooltip"} placement="bottom">
                  <Button
                    variant="outlined"
                    fullWidth={true}
                    // endIcon={<cardInfo.btnIcon />}
                    href={"www.google.com/"}
                    target="_blank"
                  >
                    button text
                  </Button>
                </Tooltip>
              </Stack>
            </Stack>
          </Card>
        </>
      }
    />
  )
}
