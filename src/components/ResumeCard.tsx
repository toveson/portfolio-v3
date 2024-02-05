import {
  Box,
  Button,
  Card,
  CardMedia,
  Pagination,
  Stack,
  Tooltip,
  Typography
} from "@mui/material"

interface CardInfo {
  img: string
  altImg: string
  text: string
  docLink: string
  btnTxt: string
  btnIcon: any
  tooltip: string
}

export interface resumeCardProps {
  cardInfo: CardInfo[]
  count: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
  page: number
  title: string
}

export const ResumeCard: React.FC<resumeCardProps> = (props) => {
  const {cardInfo, count, onChange, page, title} = props

  return (
    <Stack direction="row" spacing={2}>
      <Card
        raised={true}
        style={{
          padding: "0px 15px",
          margin: "10px 0px",
          backgroundColor: "gray"
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5" textAlign="center" color="white">
            {title}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            style={{justifyContent: "center", alignItems: "center"}}
          >
            <Stack
              spacing={1}
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Box sx={{width: "100%"}}>
                {cardInfo.map((cardInfo, key) => (
                  <Card
                    raised={true}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%"
                    }}
                    key={key}
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
                        alt={cardInfo.altImg}
                        component="img"
                        image={cardInfo.img}
                        sx={{
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          height: "250px",
                          width: "250px"
                        }}
                      />
                      <Stack
                        style={{
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                        spacing={2}
                      >
                        <Typography variant="body1">{cardInfo.text}</Typography>
                        <Tooltip title={cardInfo.tooltip} placement="bottom">
                          <Button
                            variant="outlined"
                            fullWidth={true}
                            endIcon={<cardInfo.btnIcon />}
                            href={cardInfo.docLink}
                            target="_blank"
                          >
                            {cardInfo.btnTxt}
                          </Button>
                        </Tooltip>
                      </Stack>
                    </Stack>
                  </Card>
                ))}
              </Box>
              <Pagination
                style={{marginBottom: "5px"}}
                size="small"
                count={count}
                page={page}
                onChange={onChange}
                siblingCount={0}
              />
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}
