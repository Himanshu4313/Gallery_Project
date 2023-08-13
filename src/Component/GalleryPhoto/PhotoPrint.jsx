import './PhotoPrint.css'
function PhotoPrint({photoUrl}){
    return (
        <>
        <div className="gallery-wrapper">
            <div className='image-container'>
                <img src={photoUrl} alt="img" id="image"/>
            </div>
            
        </div>
        </>
    );
}
export default PhotoPrint;