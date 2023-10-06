// import { Stack } from "@mui/material"
import ConstructionIcon from "@mui/icons-material/Construction"
import {MainContainer} from "../components/MainContainer"
// import {ResumeCard} from "../components/ResumeCard"

export const Resume: React.FC = (props) => {
  return (
    <MainContainer
      content={
        // <Stack direction="row" spacing={2}>
        //   <ResumeCard />
        //   <ResumeCard />
        // </Stack>
        <>
          <div style={{display: "flex", justifyContent: "center"}}>
            <ConstructionIcon
              style={{
                fontSize: 400
              }}
            />
          </div>
          <h1> Resume is currently under construction</h1>
        </>
      }
    />
  )
}
