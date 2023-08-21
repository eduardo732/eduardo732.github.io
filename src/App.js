
import { useRoutes } from "react-router-dom"
import Success from "./pages/Success"
import Home from "./pages/Home"

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/success",
      element: <Success />
    }
  ])
  return routes
}

export default App;
