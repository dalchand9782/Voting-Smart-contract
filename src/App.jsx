import './App.css'
import Web3Provider from './context/Web3Provider'
import RegisterVoter from './pages/Voter/RegisterVoter'
import { routes } from './routes/routes'
import { RouterProvider } from 'react-router-dom'


function App() {


  return (
    <>
      <Web3Provider>
        <RouterProvider router={routes}></RouterProvider>
      </Web3Provider>

    </>
  )
}

export default App
