
import Gallery from "react-photo-gallery"
import { photos } from '../../../photos';

const PhotoGallery = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold mt-5'>Recent Photoshoots</h1>
            <div className='mt-8'>
            <Gallery photos={photos}></Gallery>
            </div>
        </div>
    );
};

export default PhotoGallery;