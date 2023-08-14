import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ImageDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";
function ImageDetails() {
  const { id } = useParams();
  console.log(id);
  const [isLoading, setIsLoading] = useState(true);
  const [photoDetails, setPhotoDetails] = useState({});
  const ImageDetails_URL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;

  async function downloadSingleImageDetails() {
    try {
        const response = await axios.get(ImageDetails_URL);
        // log response
        console.log(response);
        //log response data
        console.log(response.data);
    
        const resData = response.data;
        const detailsObj = {
          photoUrl: resData.photo.url,
          photoTitle: resData.photo.title,
          photoDesc: resData.photo.description,
        };
        setPhotoDetails(detailsObj);
        setIsLoading(false);
    } catch (error) {
        console.error("Error fetching image details:", error);
    }
   
  }
  useEffect(() => {
    downloadSingleImageDetails();
  }, []);

  return (
    <>
       <Link to={'/'}>
       <h1>Image_Details</h1>
       </Link>
      
      {isLoading ? (
        <div className="loading">Loading Details..</div> 
      ) : (
        <div className="details-container">
          <div className="Image">
            <img src={photoDetails.photoUrl} alt="Image" />
          </div>
          <div className="description">
            <h2>{photoDetails.photoTitle}</h2>
            <p>{photoDetails.photoDesc}</p>
          </div>
        </div>
      )}
    </>
  );
}
export default ImageDetails;
