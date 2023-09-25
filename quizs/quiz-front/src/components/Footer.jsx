const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <div className="container">
          <p>&copy; {currentYear} Quiz. All Rights Reserved.</p>
          <p> 👨‍💻 developed by <a href="https://www.linkedin.com/in/mahmoud-mohamed-abdel-aal">Mahmoud Mohamed</a> </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  