import { useEffect, useState } from 'react';
import '../styles/App.scss';
import '../styles/core/reset.scss';
import data from '../data/data.json';
import getQuotes from '../services/fetch';
import ls from '../services/localStorage';
import logo from '../images/logo.png';

const App = () => {
  const [quotes, setQuotes] = useState(ls.get('quotes', []));

  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');

  const [quoteObject, setQuoteObject] = useState({
    quote: '',
    character: '',
  });
  const [filterQuote, setFilterQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('all');

  useEffect(() => {
    if (quotes.length === 0) {
      getQuotes().then((datafromAPI) => {
        ls.set('quotes', datafromAPI);
        setQuotes(datafromAPI);
      });
    }
  }, []);

  const handleQuote = (ev) => {
    setQuote(ev.target.value);
  };
  const handleCharacter = (ev) => {
    setCharacter(ev.target.value);
  };

  const handleInputs = (ev) => {
    setQuoteObject({
      ...quoteObject,
      [ev.target.id]: ev.target.value,
    });
  };

  const handleNewQuote = (ev) => {
    ev.preventDefault();
    const newQuotes = [...quotes, quoteObject];
    ls.set('quotes', newQuotes);
    setQuotes(newQuotes);
  };

  const handleFilterQuote = (ev) => {
    setFilterQuote(ev.target.value);
  };

  const handleFilterCharacter = (ev) => {
    setFilterCharacter(ev.target.value);
  };

  const handleRemoveBtn = (ev) => {
    ev.preventDefault();
  };

  const htmlData = quotes
    .filter((item) => {
      //true or false
      if (filterCharacter === 'all') {
        return true;
      } else if (filterCharacter === item.character) {
        return true;
      } else {
        return false;
      }

      //return item.character === filterCharacter;
    })
    .filter((item) => {
      return item.quote.toLowerCase().includes(filterQuote.toLowerCase());
    })
    .map((item, index) => {
      return (
        <li
          className='quotes__item'
          key={index}
        >{`${item.quote} - ${item.character}`}</li>
      );
    });

  return (
    <div className='container'>
      <header className='header'>
        <img
          className='header__logo'
          src={logo}
          alt='logotipo'
          title='logotipo'
        />
        <h1 className='header__title'>Frases de Friends</h1>
        <form className='filter'>
          <label className='filter__label' htmlFor='character'>
            Filtrar por frase
            <input
              className='filter'
              type='text'
              name='quote'
              id='quote'
              value={filterQuote}
              onChange={handleFilterQuote}
            />
          </label>
          <label className='filter__label' htmlFor='character'>
            Filtrar por personaje
            <select
              className='filter__select'
              value={filterCharacter}
              onChange={handleFilterCharacter}
            >
              <option value='all'>Todos</option>
              <option value='Ross'>Ross</option>
              <option value='Monica'>Monica</option>
              <option value='Joey'>Joey</option>
              <option value='Phoebe'>Phoebe</option>
              <option value='Chandler'>Chandler</option>
              <option value='Rachel'>Rachel</option>
            </select>
          </label>
        </form>
      </header>

      <ul className='quotes__list'>{htmlData}</ul>

      <form className='new-quote__form'>
        <h2 className='new-quote__title'>Añadir una nueva frase</h2>
        <label className='new-quote__label' htmlFor='quote'>
          <span className='new-quote__label-text'>Frase</span>
          <input
            className='new-quote__text'
            type='text'
            name='quote'
            id='quote'
            value={quoteObject.quote}
            onChange={handleInputs}
          />
        </label>
        <label className='new-quote__label' htmlFor='character'>
          <span className='new-quote__label-text'>Personaje</span>
          <input
            className='new-quote__text'
            type='text'
            name='character'
            id='character'
            value={quoteObject.character}
            onChange={handleInputs}
          />
        </label>
        <button onClick={handleNewQuote} className='new-quote__btn'>
          Añadir un nueva frase
        </button>
        <button onClick={handleRemoveBtn} className='new-quote__reset'>
          Reset
        </button>
      </form>
    </div>
  );
};

export default App;
