// function Footer()
// {
//     return (
//         <>
//         <div className="b-example-divider"></div>
//         <div className="container">
//   <footer className="py-3 my-4">
//     <ul className="nav justify-content-center border-bottom pb-3 mb-3">
//       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">Home</a></li>
//       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">Features</a></li>
//       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">Pricing</a></li>
//       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">FAQs</a></li>
//       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">About</a></li>
//     </ul>
//     <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
//   </footer>
// </div>
//         </>
//     )

// }


import React from 'react';
class Footer extends React.Component{
  render(){
    return(
      <>
         <div className="b-example-divider"></div>
         <div className="container">
   <footer className="py-3 my-4">
     <ul className="nav justify-content-center border-bottom pb-3 mb-3">
       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">Home</a></li>
       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">Features</a></li>
       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">Pricing</a></li>
       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">FAQs</a></li>
       <li className="nav-item"><a href="https://www.google.com" className="nav-link px-2 text-body-secondary">About</a></li>
     </ul>
     <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
   </footer>
 </div>
         </>
    )

  }
}
export default Footer;