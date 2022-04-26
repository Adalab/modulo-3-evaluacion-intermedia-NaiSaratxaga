import '../styles/App.scss';
import phrasesList from '../data/phrases.json';
import { useState } from 'react';

function App() {
  //variables de estado
  const [data, setData] = useState(phrasesList);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  const handleData = (ev) => {
    const textFilter = ev.target.value;
    setData(data.filter((phrase) => phrase.quote.includes(textFilter)));
  };

  const handleSelect = (ev) => {
    setSelect(ev.target.value);
  };

  const phrasesCards = data.map((phrase, i) => <li key={i}>{phrase.quote}</li>);

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
            onChange={handleData}
          />
          <select name='Filtrar por personaje' onChange={handleSelect}>
            <option>Filtrar por personaje</option>
            <option>Ross</option>
            <option>Mónica</option>
            <option>Joey</option>
            <option>Phoebe</option>
            <option>Chandler</option>
            <option>Phoebe</option>
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
