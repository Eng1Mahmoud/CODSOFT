const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <div className="container">
          <p>&copy; {currentYear} Quiz. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  