import GitHubIcon from "@mui/icons-material/GitHub"
import LiveIcon from "@mui/icons-material/Language"
import {
  Button,
  Card,
  CardMedia,
  Pagination,
  Stack,
  Tooltip,
  Typography
} from "@mui/material"
import {useState} from "react"
import projects from "../assets/js/projects"
import {MainContainer} from "../components/MainContainer"

export const Projects: React.FC = (props) => {
  const [page, setPage] = useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  return (
    <MainContainer
      fullWidth={true}
      content={
        <Stack
          direction="row"
          spacing={2}
          style={{justifyContent: "space-around", alignItems: "center"}}
        >
          <Card
            raised={true}
            style={{
              padding: "0px 15px",
              margin: "10px 0px",
              backgroundColor: "gray",
              width: "100%"
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h5" textAlign="center" color="white">
                {projects[page - 1].title}
              </Typography>
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
                    alt={projects[page - 1].altImg}
                    component="img"
                    image={projects[page - 1].img}
                    sx={{
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center"
                      // height: "250px",
                      // width: "250px"
                    }}
                  />
                </Stack>
              </Card>

              <Typography textAlign="center" color="white">
                {projects[page - 1].about}
              </Typography>

              <Stack
                direction="row"
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                spacing={2}
              >
                {!projects[page - 1].websiteInactive && (
                  <Tooltip title="visit the live site" placement="left">
                    <Button
                      variant="contained"
                      href={projects[page - 1].liveLink}
                      target="_blank"
                      endIcon={<LiveIcon />}
                      // disabled={projects[page - 1].websiteInactive}
                    >
                      Website
                    </Button>
                  </Tooltip>
                )}
                <Tooltip title="visit the repo" placement="right">
                  <Button
                    variant="contained"
                    href={projects[page - 1].repoLink}
                    target="_blank"
                    endIcon={<GitHubIcon />}
                  >
                    Github
                  </Button>
                </Tooltip>
              </Stack>
              <Stack
                spacing={1}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "5px"
                }}
              >
                <Pagination
                  size="small"
                  count={projects.length}
                  page={page}
                  onChange={handleChange}
                  siblingCount={0}
                />
              </Stack>
            </Stack>
          </Card>
        </Stack>
      }
    />
  )
}
