import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from '../auth/routes';
import { WeatherRoutes } from "../weather/routes";

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />
        
        {/* WeatherApp */}
        <Route path="/*" element={ <WeatherRoutes /> } />

    </Routes>
  )
}
