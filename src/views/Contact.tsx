import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import {
  Button,
  Card,
  CardContent,
  ListItemIcon,
  Stack,
  Typography
} from "@mui/material"

export const Contact: React.FC = (props) => {
  return (
    <div
      style={{display: "flex", justifyContent: "center", paddingTop: "40px"}}
    >
      <Card style={{maxWidth: "75vw"}}>
        <Stack direction="row">
          <Stack>
            <CardContent>
              <Typography variant="h3">Feel free to contact me</Typography>
            </CardContent>
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate suscipit, ad repudiandae nemo, cupiditate error,
                nesciunt facere at accusantium dolores blanditiis quas iure
                soluta veniam voluptas maiores voluptatum neque itaque!
              </Typography>
            </CardContent>
          </Stack>
          <CardContent>
            <Stack
              spacing={3}
              style={{justifyContent: "center", alignItems: "center"}}
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
      </Card>
    </div>
  )
}
