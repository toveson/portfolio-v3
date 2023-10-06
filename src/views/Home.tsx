// import ConstructionIcon from "@mui/icons-material/Construction"
import {Avatar, Stack, Typography} from "@mui/material"
import {useState} from "react"
// import Typed from "react-typed"
import {TypeAnimation} from "react-type-animation"
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
              {/* <Typed
                strings={["Hi, I'm Trever Oveson"]}
                typeSpeed={70}
                onComplete={() => setNameTyped(false)}
                showCursor={nameTyped}
              /> */}
              <TypeAnimation
                sequence={["Hi, I'm Trever Oveson"]}
                wrapper="span"
                speed={10}
              />
            </Typography>
            <Typography variant="h5">
              {/* <Typed
                strings={["Web Development Skills:"]}
                typeSpeed={100}
                startDelay={2000}
                onComplete={() => setSkillTyped(false)}
                showCursor={skillTyped}
              /> */}
              <TypeAnimation
                sequence={[2000, "Web Development Skills:"]}
                wrapper="span"
                speed={4}
              />
            </Typography>
            <Typography variant="h5">
              {/* <Typed
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
              /> */}
              <TypeAnimation
                sequence={[
                  5000,
                  "CSS",
                  1000,
                  "Git",
                  1000,
                  "HTML",
                  1000,
                  "JavaScript",
                  1000,
                  "MUI",
                  1000,
                  "Node",
                  1000,
                  "React",
                  1000,
                  "TypeScript"
                ]}
                wrapper="span"
                speed={2}
                repeat={Infinity}
              />
            </Typography>
          </Stack>
        </>
      }
    />
  )
}
