import React from 'react';

const EpisodeItem = ({ item }) => {

  return (
    <div className='abc'>
      {item.characters.includes('Gale Boetticher') ?
        item.episode
        : console.log('err')}
      <div>

      </div>
    </div>
  )
}

export default EpisodeItem