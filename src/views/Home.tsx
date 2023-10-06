import ConstructionIcon from "@mui/icons-material/Construction"
import {MainContainer} from "../components/MainContainer"

export const Home: React.FC = (props) => {
  return (
    <MainContainer
      content={
        <>
          <div style={{display: "flex", justifyContent: "center"}}>
            <ConstructionIcon
              style={{
                fontSize: 400
              }}
            />
          </div>
          <h1> Home is currently under construction</h1>
        </>
      }
    />
  )
}
