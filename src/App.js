import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

import './App.css';
import EpisodeGrid from './components/episodes/EpisodeGrid';

const App = () => {
  const [episodes, setEpisodes] = useState([]);

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}&limit=57`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    query ? (
      fetchItems()
    ) : (
        console.log('')
      );
  }, [query])

  useEffect(() => {
    const fetchEpisodes = async () => {
      const episodes = await axios(
        `https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`
      )

      //console.log(episodes.data.map((x) => 
      //  x.characters.includes(query)
      //))

      console.log(episodes.data)

      setEpisodes(episodes.data)
      setIsLoading(false)
    }

    fetchEpisodes()
  }, [])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid
        isLoading={isLoading}
        items={items}
      />
      {items.map(character => (
        <EpisodeGrid
          isLoading={isLoading}
          items={episodes.filter(episode =>
            episode.characters.includes(character.name)
          )}
        />
      ))}
    </div>
  );
}

export default App;
