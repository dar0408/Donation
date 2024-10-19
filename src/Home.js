// import Frame from './images/rectangle_2.jpg'
// import React from 'react';
// import { Link,Routes,Route } from 'react-router-dom';
// import Donation from './Donation';
// function Home(){
//     return(
        
//             <section className="Home pb-5">
//   <div className="row">
//     <div className="container-fluid">
//       <div className="card">
//         <img src={Frame} className="img-fluid" alt="boy" />
//         <div className="card-img-overlay">
//           <div className="card-body text-light  ">
//             <p className="mt-4 ms-5 display-5 card-text" style={{fontWeight: 300, fontFamily: '"Montserrat", sans-serif'}}>BRING CLEAN WATER TO<br /></p><p className="ms-5 faltu-1 display-5" style={{fontWeight: 800, fontFamily: '"Montserrat", sans-serif'}}>AN ASIAN VILLAGE</p><p /><br />
//             <p className="ms-5 faltu-1 card-text w-25 m-auto" style={{fontFamily: '"Montserrat", sans-serif', fontWeight: 500}}>Start by researching the specific village in Asia where you want to bring clean water. Understand the local water sources, quality issues, and the scale of the problem.</p><br />
//             <Link to="/Donation" className="card-link faltu-1 ms-5 btn btn-dark" style={{borderRadius: 26, fontWeight: 700}} role="button">Donate Now</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <Routes>
//   <Route path="/Donation" element={<Donation/>} ></Route>

//   </Routes>


// </section>

        
//     )
// }
// export default Home;


// import Frame from './images/rectangle_2.jpg';
// import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import Donation from './Donation';

// function Home() {
//   return (
//     <section className="Home pb-5">
//       <div className="row">
//         <div className="container-fluid">
//           <div className="card">
//             <img src={Frame} className="img-fluid" alt="boy" />
//             <div className="card-img-overlay">
//               <div className="card-body text-light">
//                 <p className="mt-4 ms-md-5 display-5 card-text" style={{ fontWeight: 300, fontFamily: '"Montserrat", sans-serif' }}>BRING CLEAN WATER TO<br /></p>
//                 <p className="ms-md-5 faltu-1 display-5" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>AN ASIAN VILLAGE</p>
//                 <p /><br />
//                 <p className="ms-md-5 faltu-1 card-text w-25" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>
//                   Start by researching the specific village in Asia where you want to bring clean water. Understand the local water sources, quality issues, and the scale of the problem.
//                 </p><br />
//                 <Link to="/Donation" className="card-link faltu-1 ms-md-5 btn btn-dark" style={{ borderRadius: 26, fontWeight: 700 }} role="button">Donate Now</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Routes>
//         <Route path="/Donation" element={<Donation />} />
//       </Routes>
//     </section>
//   );
// }

// export default Home;

import './Home.css';
import Frame from './images/rectangle_2.jpg';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Donation from './Donation';

function Home() {
  return (
    <section className="Home pb-5">
      <div className="row">
        <div className="container-fluid">
          <div className="card">
            <img src={Frame} className="img-fluid" alt="boy" />
            <div className="card-img-overlay">
              <div className="card-body text-light">
                <p className="mt-4 ms-md-5 display-5" style={{ fontWeight: 300, fontFamily: '"Montserrat", sans-serif' }}>BRING CLEAN WATER TO<br /></p>
                <p className="ms-md-5  display-5" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>AN ASIAN VILLAGE</p>
                <p /><br />
                <p className="ms-md-5 hidden margin1 card-text w-25" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>
                  Start by researching the specific village in Asia where you want to bring clean water. Understand the local water sources, quality issues, and the scale of the problem.
                </p><br />
                <Link to="/Donation" className="card-link margin2  ms-md-5 btn btn-dark" style={{ borderRadius: 26, fontWeight: 700 }} role="button">Donate Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/Donation" element={<Donation />} />
      </Routes>
    </section>
  );
}

export default Home;
