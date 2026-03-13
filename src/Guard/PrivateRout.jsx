import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRout = () => {
  const navigate = useNavigate()
  let getEmail = JSON.parse(localStorage.getItem('email'))

  useEffect(() => {
    if (!getEmail) {
      navigate("/")
    }
  }, [getEmail])
  return (
    <div>
        
    </div>
  )
}

export default PrivateRout









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
