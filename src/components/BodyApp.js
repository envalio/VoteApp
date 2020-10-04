import React from 'react';

const buttonsArray = [1,2,3,4,5,6,7,8,9];

const BodyApp = () => {

  const handleSave = async (event) => {
    const value = event.currentTarget.value;
    const body = {
      number: value
    }
    
    try { 
      await fetch('/vote', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
        method: "POST",
       body: JSON.stringify(body)
      })
      alert(`You vote for ${value}`);
    } catch {
      alert(`Your vote was a failed`);
    }
  }
  
  return (
    <div>
      {buttonsArray.map((number) => (
        <button key={number} className="ButtonVote" value={number} onClick={handleSave}>{number}</button>
      ))}
    </div>
  );

}

export default BodyApp;