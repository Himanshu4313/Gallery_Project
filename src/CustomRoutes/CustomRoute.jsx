import { Route, Routes } from "react-router-dom";
import Gallery from "../Component/Gallery/Gallery";
import ImageDetails from "../Component/Imagedetails/ImageDetails";

function CustomRoute(){
   return(
     <Routes>
        <Route path="/" element={<Gallery/>}/>
        <Route path="/photos/:id" element={<ImageDetails/>}/>
        </Routes>
   );
}
export default CustomRoute;