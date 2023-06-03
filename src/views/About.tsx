import {Card, CardContent, Stack, Typography} from "@mui/material"

export const About = () => {
  return (
    <div
      style={{display: "flex", justifyContent: "center", paddingTop: "40px"}}
    >
      <Card style={{maxWidth: "75vw"}}>
        <CardContent>
          <Stack>
            <Typography>
              Hi there! My name is Trever and I'm a frontend developer with a
              passion for creating beautiful and functional web experiences.
              With 2 years of experience in the industry, I have a strong
              foundation in HTML, CSS, JavaScript, and TypeScript, as well as
              experience with various front-end frameworks and libraries
              including React and MUI.
            </Typography>
            <br />
            <Typography>
              When I'm not coding, you can find me hitting the slopes for some
              snowboarding or exploring new trails on my mountain bike. I'm also
              a big fan of video games and enjoy spending time camping with my
              dog and getting lost in a good book.
            </Typography>
            <br />
            <Typography>
              I take pride in delivering clean and scalable code that not only
              looks great but also performs well. Some of my favorite projects
              to date include [LIST OF RECENT PROJECTS] where I was able to
              showcase my skills in [LIST OF SKILLS SHOWCASED IN PROJECTS]. Feel
              free to take a look at my portfolio and don't hesitate to reach
              out if you're interested in collaborating or just want to chat
              about all things code.
            </Typography>
            <br />
            <Typography>
              Thanks for stopping by and getting to know me a little better!
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  )
}
