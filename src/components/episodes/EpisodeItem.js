import React from 'react';

const EpisodeItem = ({ item }) => {
  return (
    <div className='containerEps'>
      <div className='listEps'>
        <div className='listEpsContent'>
          {item.episode_id}
        </div>
      </div>
    </div>
  )
  
}


export default EpisodeItem
