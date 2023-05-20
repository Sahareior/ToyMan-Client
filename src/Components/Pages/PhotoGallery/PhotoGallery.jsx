
import Gallery from "react-photo-gallery"
import { photos } from '../../../photos';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhotoGallery = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000">
            <h1 className='text-5xl text-center font-bold mt-5'>Recent Photoshoots</h1>
            <div className='mt-8'>
            <Gallery photos={photos}></Gallery>
            </div>
        </div>
    );
};

export default PhotoGallery;