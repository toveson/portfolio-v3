import {Button, Stack, Tooltip} from "@mui/material"
import {useEffect, useState} from "react"
import languages from "../assets/js/languages"
import resume from "../assets/js/resume"
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
          direction={{md: "column", lg: "row"}}
          style={{justifyContent: "space-around", alignItems: "center"}}
        >
          <Stack direction="row" spacing={2}>
            <Stack spacing={2}>
              {resume.map((resume, key) => (
                <Stack
                  spacing={2}
                  style={{justifyContent: "center", alignItems: "center"}}
                  key={key}
                >
                  <Tooltip title={resume.tooltip} placement="bottom">
                    <Button
                      variant="outlined"
                      fullWidth={true}
                      endIcon={<resume.btnIcon />}
                      href={resume.docLink}
                      target="_blank"
                    >
                      {resume.btnTxt}
                    </Button>
                  </Tooltip>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <ResumeCard
            cardInfo={currentLanguageCard}
            count={Math.ceil(languages.length / 1)}
            page={currentLanguagePage}
            onChange={handleLanguagePageChange}
            title="Languages"
          />
          <ResumeCard
            cardInfo={currentSkillCard}
            count={Math.ceil(skills.length / 1)}
            page={currentSkillPage}
            onChange={handleSkillPageChange}
            title="Skills"
          />
        </Stack>
      }
    />
  )
}
