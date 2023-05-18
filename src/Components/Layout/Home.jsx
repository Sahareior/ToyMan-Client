
import Hero from '../Pages/Hero/Hero';
import Products from '../Pages/PopulerProducts/Products';
import Section from '../Pages/Sections/Section';
import Nav from '../Shared/Nav';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Hero></Hero>
            <Section></Section>
            <Products></Products>
        </div>
    );
};

export default Home;