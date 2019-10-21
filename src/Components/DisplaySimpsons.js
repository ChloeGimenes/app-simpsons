import React from 'react';

function DisplaySimpsons({ simpsons }) {
  return (
    <div className="DisplaySimpsons">
      <img
        src={simpsons.image}
        alt={simpsons.character}
      />
      
        <p>{simpsons.character}</p>
        <p>{simpsons.quote}</p>
      
    </div>
  );
};

export default DisplaySimpsons;