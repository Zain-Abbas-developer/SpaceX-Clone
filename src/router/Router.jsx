import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Starship from '../pages/vehicles/Starship'

const router = createBrowserRouter([
    {
        path: '/',
        index: true,
        element: <App/>,
        
    },
    {
        path: '/vehicles/starship',
        element: <Starship/>
    }
])


export default router