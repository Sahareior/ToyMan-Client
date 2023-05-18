
import Hero from '../Pages/Hero/Hero';

import Products from '../Pages/PopulerProducts/Products';
import Section from '../Pages/Sections/Section';
import Footer from '../Shared/Footer';
import Nav from '../Shared/Nav';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Hero></Hero>
            
            <Section></Section>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;