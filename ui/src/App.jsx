import { Suspense } from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Router from "./router"
import Loader from "./utils/Loader"

function App() {

  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Router />
    </Suspense>
    <ToastContainer />
  </>
  )
}

export default App
