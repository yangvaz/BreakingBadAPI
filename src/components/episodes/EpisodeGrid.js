import React from 'react'
import EpisodeItem from './EpisodeItem';
import Spinner from '../ui/Spinner';

const EpisodeGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
      <section className="cards">
        {items.map((item) => (
          //item.characters.includes('Gale Boetticher') ? item.episode : (console.log('num deu'))
          <EpisodeItem key={item.char_id} item={item}> </EpisodeItem>
        ))}
      </section>
    )
}

export default EpisodeGrid