import {
  Box,
  Button,
  Card,
  CardMedia,
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
}

export const ResumeCard: React.FC<resumeCardProps> = (props) => {
  const {cardInfo} = props

  return (
    <Box sx={{width: "100%"}}>
      {cardInfo.map((cardInfo, key) => (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%"
          }}
          key={key}
        >
          <Stack
            direction={{xs: "column", md: "row"}}
            style={{justifyContent: "center", alignItems: "center"}}
          >
            <CardMedia
              alt={cardInfo.altImg}
              component="img"
              image={cardInfo.img}
              sx={{
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "200px",
                width: "200px"
              }}
            />
            <Stack style={{justifyContent: "center", alignItems: "center"}}>
              <Typography variant="body2" color="text.secondary">
                {cardInfo.text}
              </Typography>
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
  )
}
