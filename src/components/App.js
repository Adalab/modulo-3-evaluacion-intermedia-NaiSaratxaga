import '../styles/App.scss';
import phrasesList from '../data/phrases.json';
import { useState } from 'react';

function App() {
  //variables de estado
  const [data, setData] = useState(phrasesList);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  const filterPhrasesByText = (ev) => {
    const textToFilter = ev.target.value.toLowerCase();
    const filteredPhrases = phrasesList.filter((phrasesList) =>
      phrasesList.quote.toLowerCase().includes(textToFilter)
    );
    setData(filteredPhrases);
  };

  const filterPhrasesByCharacter = (ev) => {
    if (!ev.target.value) {
      setData(phrasesList);
    } else {
      const selectedCharacter = ev.target.value.toLowerCase();
      const filteredPhrases = phrasesList.filter(
        (phrasesList) =>
          phrasesList.character.toLowerCase() === selectedCharacter
      );
      setData(filteredPhrases);
    }
  };

  const phrasesCards = data.map((phrase, i) => {
    return (
      <li key={i}>
        <p>{phrase.quote}</p>
        <p>{phrase.character}</p>
      </li>
    );
  });

  return (
    <div className='App'>
      {/* header */}
      <header>
        <h1>Frases de Friends</h1>
        <form>
          <input
            autoComplete='off'
            type='search'
            name='search'
            placeholder='Filtrar por frase'
            onChange={filterPhrasesByText}
          />
          <select
            name='Filtrar por personaje'
            onChange={filterPhrasesByCharacter}
          >
            <option>Filtrar por personaje</option>
            <option value='Ross'>Ross</option>
            <option value='Mónica'>Mónica</option>
            <option value='Joey'>Joey</option>
            <option value='Phoebe'>Phoebe</option>
            <option value='Chandler'>Chandler</option>
            <option value='Phoebe'>Phoebe</option>
          </select>
        </form>
      </header>
      <main>
        <ul>{phrasesCards}</ul>
      </main>
    </div>
  );
}

export default App;