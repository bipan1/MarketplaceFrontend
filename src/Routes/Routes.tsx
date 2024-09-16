import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/Homepage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ChooseCategory from "../Pages/ChooseCategory/ChooseCategory";
import CreateJob from "../Pages/CreateJob/CreateJob";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {path : '', element : <HomePage />},
            {path : '/login', element : <LoginPage />},
            {path : '/register', element : <RegisterPage />},
            {path : '/create', element : <ChooseCategory />},
            {path : '/create-job', element : <CreateJob />}
        ]
    }
])