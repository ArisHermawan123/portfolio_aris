import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'
import Footer from '../Footer'

const index = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default index
