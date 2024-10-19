// import React, { useState } from 'react';
// import Image_1 from './images/ellipse_1_copy_4.png';
// import Image_2 from './images/ellipse_1_copy_4_2.png';
// import Image_3 from './images/ellipse_1_copy_4_3.png';
// import Image_4 from './images/ellipse_1_copy_4_4.png'; // Add your second image import
// import './Event_1.css';

// const testimonials = [
//   {
//     name: 'Altruism Ally',
//     role: 'Event Coordinator:',
//     message:
//       "We know you have a lot of choices when it comes to donating, and we are so grateful that you chose to donate to our cause. We promise to be responsible stewards of both your donation and your trust.",
//     image: Image_1,
//   },
//   {
//     name: 'Benevolence',
//     role: 'Donation Collection Agent:',
//     message:
    // "In a world filled with countless needs, your decision to contribute to our cause speaks volumes. Together, we can make a meaningful impact on lives and communities.",
//     image: Image_2,
//   },
//   {
//     name: 'Generosity ',
//     role: 'Fundraising Specialist:',
//     message:
//     "Your generosity is the cornerstone of our efforts. With each donation, we are empowered to tackle challenges head-on and make a real difference in the lives of others.",
//     image: Image_3,
//   },
//   {
//     name: 'John Doe',
//     role: 'Social Media Ambassador:',
//     message:
//     "Every donation is a powerful statement of belief in our cause. Rest assured, we are dedicated to using your contribution effectively to drive positive change.",
//      image: Image_4,
//   },
//   // Add more testimonials as needed
// ];

// function Event() {
//   const [currentCard, setCurrentCard] = useState(0);

//   const handleNextCard = () => {
//     setCurrentCard((prevCard) => (prevCard + 1) % testimonials.length);
//   };

//   const handlePrevCard = () => {
//     setCurrentCard((prevCard) => (prevCard - 1 + testimonials.length) % testimonials.length);
//   };

//   const { name, role, message, image } = testimonials[currentCard];

//   return (
//     <section className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded Photo">
//       <h2 className="text-center text-light mb-3" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>
//         WHAT PEOPLE SAY
//       </h2>
//       <div className="row d-flex justify-content-center">
//         <div className="col-md-10">
//           <div className="card">
//             <div className="card-body m-3">
//               <div className="row">
//                 <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
//                   <img src={image} className="img-fluid" alt="woman avatar" width={200} height={200} />
//                 </div>
//                 <div className="col-lg-8">
//                   <p className="fw-bold lead mb-2">
//                     <strong className="text-danger">{name}</strong> <strong>| {role}</strong>
//                   </p>
//                   <p className="text-muted fw-light mb-4">{message}</p>
//                   <div className="navigation-buttons ">
//                     <i className="fas fa-chevron-left" onClick={handlePrevCard} disabled={currentCard === 0}></i>
//                     <i className="fas fa-chevron-right" onClick={handleNextCard} disabled={currentCard === testimonials.length - 1}></i>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Event;

// import React, { useState, useEffect } from 'react';
// import './Event_1.css';

// const Event = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [currentCard, setCurrentCard] = useState(0);

//   useEffect(() => {
//     // Fetch testimonials from your server
//     fetch('http://localhost:8080/api/testimonials') // Replace with your actual backend URL
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setTestimonials(data.data);
//         } else {
//           console.error('Error fetching testimonials:', data.error);
//         }
//       })
//       .catch((error) => console.error('Error fetching testimonials:', error));
//   }, []);

//   const handleNextCard = () => {
//     setCurrentCard((prevCard) => (prevCard + 1) % testimonials.length);
//   };

//   const handlePrevCard = () => {
//     setCurrentCard((prevCard) => (prevCard - 1 + testimonials.length) % testimonials.length);
//   };

//   if (testimonials.length === 0) {
//     // You might want to add a loading state here
//     return <div>Loading testimonials...</div>;
//   }

//   const { name, role, message, image } = testimonials[currentCard];

//   return (
//     <section className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded Photo">
//       <h2 className="text-center text-light mb-3" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>
//         WHAT PEOPLE SAY
//       </h2>
//       <div className="row d-flex justify-content-center">
//         <div className="col-md-10">
//           <div className="card">
//             <div className="card-body m-3">
//               <div className="row">
//                 <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
//                   <img src={image} className="img-fluid" alt="avatar" width={200} height={200} />
//                 </div>
//                 <div className="col-lg-8">
//                   <p className="fw-bold lead mb-2">
//                     <strong className="text-danger">{name}</strong> <strong>| {role}</strong>
//                   </p>
//                   <p className="text-muted fw-light mb-4">{message}</p>
//                   <div className="navigation-buttons ">
//                     {currentCard > 0 && <i className="fas fa-chevron-left" onClick={handlePrevCard}></i>}
//                     {currentCard < testimonials.length - 1 && <i className="fas fa-chevron-right" onClick={handleNextCard}></i>}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Event;


import React, { useState, useEffect } from 'react';
import './Event_1.css';

const Event = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    // Fetch testimonials from your server
    fetch('http://localhost:8080/card') // Replace with your actual backend URL
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTestimonials(data.data);
        } else {
          console.error('Error fetching testimonials:', data.error);
        }
      })
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % testimonials.length);
  };

  const handlePrevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    // You might want to add a loading state here
    return <div>Loading testimonials...</div>;
  }

  const { name, role, message,  } = testimonials[currentCard];

  return (
    <section className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded Photo">
      <h2 className="text-center text-light mb-3" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>
        WHAT PEOPLE SAY 
      </h2>
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body m-3">
              <div className="row">
                <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img src={"https://img.freepik.com/free-photo/volunteers-work-preparing-donations-charity_23-2148638025.jpg?w=826&t=st=1705388571~exp=1705389171~hmac=939ca6f6a9c614b6a4f768ef3c568234e73e47bbc225fede16614c55a149cb45"} className="img-fluid" alt="avatar" width={200} height={200} />
                </div>
                <div className="col-lg-8">
                  <p className="fw-bold lead mb-2">
                    <strong className="text-danger">{name}</strong> <strong>| {role}</strong>
                  </p>
                  <p className="text-muted fw-light mb-4">{message}</p>
                  <div className="navigation-buttons ">
                    {currentCard > 0 && <i className="fas fa-chevron-left" onClick={handlePrevCard}></i>}
                    {currentCard < testimonials.length - 1 && <i className="fas fa-chevron-right" onClick={handleNextCard}></i>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
