import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRout = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return user ? children : null;
};

export default PrivateRout;

// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const PrivateRout = ({ children }) => {
//     const navigate = useNavigate()
//     let getEmail = JSON.parse(localStorage.getItem('email'))

//     useEffect(() => {
//         if (!getEmail) {
//             navigate('/')
//         }
//     }, [getEmail])

//     return children

// }

// export default PrivateRout
