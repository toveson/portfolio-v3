import {Pagination, Stack, Typography} from "@mui/material"
import {useEffect, useState} from "react"
import languages from "../assets/js/languages"
import {MainContainer} from "../components/MainContainer"
import {ResumeCard} from "../components/ResumeCard"

export const Resume: React.FC = (props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const cardsPerPage = 1
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = languages.slice(indexOfFirstCard, indexOfLastCard)

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1
        return nextPage > Math.ceil(languages.length / cardsPerPage)
          ? 1
          : nextPage
      })
    }, 3000) // Change the interval time (in milliseconds) as per your requirement

    return () => clearInterval(interval)
  }, [])

  return (
    <MainContainer
      fullWidth={true}
      content={
        <Stack
          spacing={2}
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
                  <ResumeCard cardInfo={currentCards} />
                  <Pagination
                    count={Math.ceil(languages.length / cardsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      }
    />
  )
}
