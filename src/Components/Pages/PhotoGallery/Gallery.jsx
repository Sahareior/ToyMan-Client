import React from 'react';
import { Gallery, Item } from 'react-lightgallery';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-transitions.scss';

const Gallery = () => {
    return (
        <div>
            <PhotoAlbum layout="rows" photos={photos} />

        </div>
    );
};

export default Gallery;