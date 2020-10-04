import React, { useState, useEffect } from 'react';

const VotesList = () => {
    const [votesData, setVotesData] = useState(null);

    useEffect(() => {
        fetchVotesData();
        return () => {
            setVotesData(null);
        }
    }, [])

  const fetchVotesData = () => {
    fetch('/statistic',
    { 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }})
      .then(res => res.json(votesData))
      .then(res => setVotesData(res))
      .catch(err => console.error(err))
  }
    if(!votesData) {
        return <div>Loading...</div> 
    }

    if(!votesData.length) {
        return <div>No results</div>
    }
    
    return (
        <div className="BodyVoteList">
            {votesData.map((item, index) => (
                <div key={index}>Number: {item.number} Count: {item.count}</div>
            ))}
        </div>
    )
}

export default VotesList;