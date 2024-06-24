import React from 'react'
import { useParams } from 'react-router-dom';


const User = () => {
//useParams is used to get the id of the user
    const {userId} = useParams();
  return (
    <div className=' bg-gray-600 text-white p-4'>User: {userId}  </div>
  )
}

export default User