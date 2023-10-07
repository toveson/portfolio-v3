import {Pagination, Stack, Typography} from "@mui/material"
import {useEffect, useState} from "react"
import languages from "../assets/js/languages"
import skills from "../assets/js/skills"
import {MainContainer} from "../components/MainContainer"
import {ResumeCard} from "../components/ResumeCard"

export const Resume: React.FC = (props) => {
  const [currentLanguagePage, setCurrentLanguagePage] = useState<number>(1)
  const [currentSkillPage, setCurrentSkillPage] = useState<number>(1)
  const indexOfLastLanguageCard = currentLanguagePage * 1
  const indexOfFirstLanguageCard = indexOfLastLanguageCard - 1
  const indexOfLastSkillCard = currentSkillPage * 1
  const indexOfFirstSkillCard = indexOfLastSkillCard - 1
  const currentLanguageCard = languages.slice(
    indexOfFirstLanguageCard,
    indexOfLastLanguageCard
  )
  const currentSkillCard = skills.slice(
    indexOfFirstSkillCard,
    indexOfLastSkillCard
  )

  const handleLanguagePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentLanguagePage(page)
  }
  const handleSkillPageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentSkillPage(page)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguagePage((prevPage) => {
        const nextPage = prevPage + 1
        return nextPage > Math.ceil(languages.length / 1) ? 1 : nextPage
      })
      setCurrentSkillPage((prevPage) => {
        const nextPage = prevPage + 1
        return nextPage > Math.ceil(skills.length / 1) ? 1 : nextPage
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <MainContainer
      fullWidth={true}
      content={
        <Stack
          spacing={2}
          // direction={{xs: "column", md: "row"}}
          style={{justifyContent: "center", alignItems: "center"}}
        >
          <Stack direction="row" spacing={2}>
            <Stack spacing={2}>
              <Typography variant="h4" textAlign="center">
                Languages
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                style={{justifyContent: "center", alignItems: "center"}}
              >
                <Stack
                  spacing={2}
                  style={{justifyContent: "center", alignItems: "center"}}
                >
                  <ResumeCard cardInfo={currentLanguageCard} />
                  <Pagination
                    count={Math.ceil(languages.length / 1)}
                    page={currentLanguagePage}
                    onChange={handleLanguagePageChange}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h4" textAlign="center">
              Skills
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              style={{justifyContent: "center", alignItems: "center"}}
            >
              <Stack
                spacing={2}
                style={{justifyContent: "center", alignItems: "center"}}
              >
                <ResumeCard cardInfo={currentSkillCard} />
                <Pagination
                  count={Math.ceil(skills.length / 1)}
                  page={currentSkillPage}
                  onChange={handleSkillPageChange}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      }
    />
  )
}
