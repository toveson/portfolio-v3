// import ConstructionIcon from "@mui/icons-material/Construction"
import {Avatar, Stack, Typography} from "@mui/material"
import {useState} from "react"
import Typed from "react-typed"
import avatar from "../assets/images/trever-avatar.png"
import {MainContainer} from "../components/MainContainer"

export const Home: React.FC = (props) => {
  const [nameTyped, setNameTyped] = useState(true)
  const [skillTyped, setSkillTyped] = useState(true)

  return (
    <MainContainer
      content={
        <>
          <Stack style={{justifyContent: "center", alignItems: "center"}}>
            <Avatar
              style={{
                width: "75%",
                height: "75%",
                margin: "1rem"
              }}
              src={avatar}
              alt="Trever's avatar"
            />
          </Stack>
          <Stack style={{justifyContent: "center", alignItems: "center"}}>
            <Typography variant="h4">
              <Typed
                strings={["Hi, I'm Trever Oveson"]}
                typeSpeed={70}
                onComplete={() => setNameTyped(false)}
                showCursor={nameTyped}
              />
            </Typography>
            <Typography variant="h5">
              <Typed
                strings={["Web Development Skills:"]}
                typeSpeed={100}
                startDelay={2000}
                onComplete={() => setSkillTyped(false)}
                showCursor={skillTyped}
              />
            </Typography>
            <Typography variant="h5">
              <Typed
                // showCursor={false}
                strings={[
                  "CSS",
                  "Git",
                  "HTML",
                  "JavaScript",
                  "MUI",
                  "Node",
                  "React",
                  "TypeScript"
                ]}
                startDelay={5000}
                typeSpeed={70}
                backSpeed={40}
                backDelay={1000}
                shuffle={true}
                loop
              />
            </Typography>
          </Stack>
        </>
      }
    />
  )
}
