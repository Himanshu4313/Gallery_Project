import { Link } from "react-router-dom";
import "./PhotoPrint.css";
function PhotoPrint({ photoUrl, id }) {
  return (
    <>
      <div className="gallery-wrapper">
        <div className="image-container">
          <img src={photoUrl} alt="img" id="image" />
          <Link to={`/photos/${id}`}>
            <button className="detailsbtn">Details</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default PhotoPrint;
