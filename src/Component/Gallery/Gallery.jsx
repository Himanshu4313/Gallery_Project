import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Gallery.css";
import PhotoPrint from "../GalleryPhoto/PhotoPrint";
function Gallery() {
  const [loading, setLoading] = useState(true);
  const [galleryList, setGalleryList] = useState([]);
  const gallery_URL = "https://api.slingacademy.com/v1/sample-data/photos";

  async function downloadGallery() {
    const response = await axios.get(gallery_URL);
    // we console response of gallery request
    console.log(response);
    // log response.data
    const getData = await response.data;
    const result = getData.photos.map((photo) => {
      return {
        image: photo.url,
        title: photo.title,
        desc: photo.description,
      };
    });
    console.log(result);
    setGalleryList(result);

    setLoading(false);
  }

  useEffect(() => {
    downloadGallery();
  }, []);

  // useEffect(() => {
    
  //   console.log('gallery',galleryList);
  // }, [galleryList]);
  return (
    <>
      <div className="header-container">
        <h1>Gallery</h1>
      </div>
      {loading ? 
        "Loading..." : galleryList.map((p , index) => 
           <PhotoPrint key={index} photoUrl={p.image}/>
        )}
       
    </>
  );
}
export default Gallery;
