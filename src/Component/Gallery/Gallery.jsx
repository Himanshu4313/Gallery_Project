import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Gallery.css";
import PhotoPrint from "../GalleryPhoto/PhotoPrint";
function Gallery() {
  const [loading, setLoading] = useState(true);
  const [galleryList , setGalleryList] = useState([]);
  const gallery_URL = "https://api.slingacademy.com/v1/sample-data/photos";

  async function downloadGallery() {
    const response = await axios.get(gallery_URL);
    // we console response of gallery request
    console.log(response);
    // log response.data
     const getData = response.data;
      const result =  getData.photos.map((photo)=> {
           return {
              image:photo.url,
              title:photo.title,
              desc:photo.description,
           }
       })
     console.log(result)
     setGalleryList(result);
     console.log(galleryList);
    setLoading(false);
  }

  useEffect(() => {
    downloadGallery();
  }, []);
  return (
    <>
      <div className="header-container">
        <h1>Gallery</h1>
       
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <PhotoPrint
          photoUrl={"https://api.slingacademy.com/public/sample-photos/2.jpeg"}
        />
      )}
      
    </>
  );
}
export default Gallery;
