import React from 'react'
import { Link } from 'react-router-dom';

const CardSection = ({bgColor, text,link}) => {
  return (
    <>
      
        <Link
          to={link}
          className={`${bgColor}hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition transform hover:scale-105`}
        >
         {text}
        </Link>
      
    </>
  );
}

export default CardSection
