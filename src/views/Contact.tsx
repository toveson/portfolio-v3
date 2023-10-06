import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import {
  Button,
  CardContent,
  ListItemIcon,
  Stack,
  Typography
} from "@mui/material"
import {MainContainer} from "../components/MainContainer"

export const Contact: React.FC = (props) => {
  return (
    <MainContainer
      content={
        <Stack>
          <Stack style={{justifyContent: "center", alignItems: "center"}}>
            <CardContent>
              <Typography variant="h3">Feel free to contact me</Typography>
            </CardContent>
            <CardContent>
              <Typography>Email: toveson9522@gmail.com</Typography>
              <Typography>Phone: 385-233-8011</Typography>
            </CardContent>
          </Stack>
          <CardContent>
            <Stack
              spacing={3}
              style={{justifyContent: "center", alignItems: "center"}}
              direction="row"
            >
              <ListItemIcon>
                <Button
                  onClick={() => {
                    window.open(
                      "https://github.com/toveson",
                      "_blank",
                      "noreferrer"
                    )
                  }}
                >
                  <GitHubIcon fontSize="large" />
                </Button>
              </ListItemIcon>

              <ListItemIcon>
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/trever-oveson/",
                      "_blank",
                      "noreferrer"
                    )
                  }}
                >
                  <LinkedInIcon fontSize="large" />
                </Button>
              </ListItemIcon>

              <ListItemIcon>
                <Button
                  onClick={() => {
                    window.location.href = "mailto:toveson9522@gmail.com"
                  }}
                >
                  <EmailIcon fontSize="large" />
                </Button>
              </ListItemIcon>

              {/* // ! not sure if this will work */}
              {/* <ListItemIcon>
            <Button
              onClick={() => {
                window.location.href = "tel:+13852338011"
              }}
            >
              <PhoneForwardedIcon fontSize="large" />
            </Button>
          </ListItemIcon> */}
            </Stack>
          </CardContent>
        </Stack>
      }
    />
  )
}
