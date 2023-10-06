import {Avatar, Stack, Typography} from "@mui/material"
import {createRef, useEffect, useState} from "react"
import {TypeAnimation} from "react-type-animation"
import avatar2 from "../assets/images/avatars/avatar-eyes-closed.png"
import avatar5 from "../assets/images/avatars/avatar-happy.png"
import avatar4 from "../assets/images/avatars/avatar-side.png"
import avatar3 from "../assets/images/avatars/avatar-smile.png"
import avatar7 from "../assets/images/avatars/avatar-squint.png"
import avatar6 from "../assets/images/avatars/avatar-wink.png"
import avatar1 from "../assets/images/avatars/trever-avatar.png"
import {MainContainer} from "../components/MainContainer"

export const Home: React.FC = (props) => {
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0)
  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * avatars.length)
      setCurrentAvatarIndex(randomIndex)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line
  }, [])

  const ref = createRef<HTMLSpanElement>()
  const ref2 = createRef<HTMLParagraphElement>()

  const CURSOR_CLASS_NAME = "custom-type-animation-cursor"
  const CURSOR_CLASS_NAME2 = "custom-type-animation-cursor"

  const showCursorName = (show: boolean) => {
    if (!ref.current) {
      return
    }

    const el = ref.current
    if (show) {
      el.classList.add(CURSOR_CLASS_NAME)
    } else {
      el.classList.remove(CURSOR_CLASS_NAME)
    }
  }
  const showCursorDevSkills = (show: boolean) => {
    if (!ref2.current) {
      return
    }

    const el = ref2.current
    if (show) {
      el.classList.add(CURSOR_CLASS_NAME)
    } else {
      el.classList.remove(CURSOR_CLASS_NAME)
    }
  }

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
              src={avatars[currentAvatarIndex]}
              alt="Trever's avatar"
            />
          </Stack>
          <Stack style={{justifyContent: "center", alignItems: "center"}}>
            <Typography variant="h4">
              <TypeAnimation
                ref={ref}
                cursor={false}
                sequence={["Hi, I'm Trever", () => showCursorName(false)]}
                wrapper="span"
                speed={10}
                className={CURSOR_CLASS_NAME}
              />
            </Typography>
            <Typography variant="h5">
              <TypeAnimation
                ref={ref2}
                cursor={false}
                sequence={[
                  2000,
                  "Web Dev Skills:",
                  () => showCursorDevSkills(false)
                ]}
                wrapper="p"
                speed={4}
                className={CURSOR_CLASS_NAME2}
              />
            </Typography>
            <Typography variant="h5">
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

          <style>{`
            .custom-type-animation-cursor::after {
              content: "|";
              animation: cursor 1.1s infinite step-start;
            }
            @keyframes cursor {
              50% {
                opacity: 0;
              }
            }
          `}</style>
        </>
      }
    />
  )
}
