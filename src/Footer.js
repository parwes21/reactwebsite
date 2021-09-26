import React from 'react';
 

 const Footer =()=>{
   

  return (
      <>
        <footer className="w-100 bg-light text-center footer" style = 
        {{
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}}>
        <p>
            © 2021 Copyright: All Right Reserved.
            </p>
        </footer>
    </>
  );
}
export default Footer;