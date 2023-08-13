function PhotoPrint({photoUrl}){
    return (
        <>
        <div className="gallery-wrapper">
            <img src={photoUrl} alt="img" id="image"/>
        </div>
        </>
    );
}
export default PhotoPrint;