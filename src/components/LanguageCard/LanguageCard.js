import React from 'react';
import './LanguageCard.css';

const LanguageCard = ({language, topics}) => {
    return (
    <>
        <div className='LanguageCardContent'>
            <h3>{language}</h3>
            <ul>
                {topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                ))}
            </ul>
        </div>
    </>
  );
}

export default LanguageCard;