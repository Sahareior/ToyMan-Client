const Footer = () => {
  return (
    <footer className="footer mt-8 p-20 bg-base-200   text-base-content">
      <div className="mx-auto">
        <img
          src="https://cdn.shopify.com/s/files/1/1152/4590/files/toyman_d3aab1e4-a273-4b68-a0c8-9b6f6e6282c2_190x.png?v=1675962545"
          alt=""
        />
        <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
      </div>
      <div className="mx-auto">
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className="mx-auto">
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className="mx-auto ">
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div className="mx-auto text-center">
        <span className="footer-title ml-6">ToyMan</span>
        <p>123 Toy Street<br/>TestCity, TestCountry</p>
        <p>Phone: 123-456-7890<br/>Email: info@toyman.com</p>
      </div>
    </footer>
  );
};

export default Footer;
