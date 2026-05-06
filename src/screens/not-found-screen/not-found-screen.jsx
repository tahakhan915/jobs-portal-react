import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NotFoundScreen = () => {
  const navigate = useNavigate()
  return (
    <section class="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle class="text-6xl fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></FaExclamationTriangle>
      
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <button
        onClick={() => {
          navigate('/')
        }}
        class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >Go Back</button
      >
    </section>
  )
}

export default NotFoundScreen