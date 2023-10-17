import ConstructionIcon from "@mui/icons-material/Construction"
import {MainContainer} from "../components/MainContainer"

export const Projects: React.FC = (props) => {
  // return <MainContainer content={<h1>Hello from Projects.tsx</h1>} />
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
          <h1> Projects are currently under construction</h1>
          <div style={{display: "flex", justifyContent: "center"}}>
            <p>
              Feel free to take a look at the{" "}
              <a href="https://toveson.github.io/react-portfolio/#/portfolio">
                projects
              </a>{" "}
              on my previous portfolio.
            </p>
          </div>
        </>
      }
    />
  )
}
