import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/Homepage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ChooseCategory from "../Pages/ChooseCategory/ChooseCategory";
import CreateJob from "../Pages/CreateJob/CreateJob";
import CreateRooms from "../Pages/CreateRooms/CreateRooms";
import CreateHousehold from "../Pages/CreateHousehold/CreateHousehold";
import Createclothing from "../Pages/CreateClothing/CreateClothing";
import CreateElectronics from "../Pages/CreateElectronics/CreateElectronics";
import CreateCars from "../Pages/CreateCars/CreateCars";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {path : '', element : <HomePage />},
            {path : '/login', element : <LoginPage />},
            {path : '/register', element : <RegisterPage />},
            {path : '/create', element : <ChooseCategory />},
            {path : '/create-jobs', element : <CreateJob />},
            {path : '/create-rooms', element : <CreateRooms />},
            {path : '/create-household', element : <CreateHousehold />},
            {path : '/create-clothing', element : <Createclothing />},
            {path : '/create-electronics', element : <CreateElectronics />},
            {path : '/create-cars', element : <CreateCars />}
        ]
    }
])