
import AllItems from '../Pages/AllItems/AllItems';
import Hero from '../Pages/Hero/Hero';
import PhotoGallery from '../Pages/PhotoGallery/PhotoGallery';

import Products from '../Pages/PopulerProducts/Products';
import Section from '../Pages/Sections/Section';
import UserReview from '../Pages/UserReview/UserReview';
import Footer from '../Shared/Footer';
import Nav from '../Shared/Nav';

const Home = () => {
    return (
        <div >
            <Nav></Nav>
            <Hero></Hero>
            <AllItems></AllItems>
            <Section></Section>
            <Products></Products>
            <UserReview></UserReview> 
            <PhotoGallery></PhotoGallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;