import '../styles/App.scss';
import '../styles/core/reset.scss';

import { useEffect, useState } from 'react';
import getQuotes from '../services/fetch';
import ls from '../services/localStorage';
import logo from '../images/logo.png';

const App = () => {
  // Las quotes que vienen de la API
  const [quotes, setQuotes] = useState(ls.get('quotes', []));

  // Objeto con la combinación de ambos filtros a aplicar
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
    // Reset form
    setFilterQuote('');
    setFilterCharacter('all');
  };

  const handleFilterQuote = (ev) => {
    setFilterQuote(ev.target.value);
  };

  const handleFilterCharacter = (ev) => {
    setFilterCharacter(ev.target.value);
  };

  const htmlData = quotes
    .filter((item) => {
      if (filterCharacter === 'all') {
        return true;
      } else if (filterCharacter === item.character) {
        return true;
      } else {
        return false;
      }
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
            Filtrar por frase:
          </label>
          <input
            className='filter__text'
            type='text'
            name='quote'
            id='quote'
            value={filterQuote}
            onChange={handleFilterQuote}
          />
          <label className='filter__labelCharacter' htmlFor='character'>
            Filtrar por personaje:
          </label>
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
        </form>
      </header>

      <ul className='quotes__list'>{htmlData}</ul>

      <h2 className='new-quote__title'>Añadir una nueva frase</h2>
      <form className='new-quote__form'>
        <label className='new-quote__label' htmlFor='quote'></label>
        <span className='new-quote__label-text'>Frase:</span>
        <input
          className='new-quote__text'
          type='text'
          name='quote'
          id='quote'
          value={quoteObject.quote}
          onChange={handleInputs}
        />
        <label className='new-quote__label' htmlFor='character'></label>
        <span className='new-quote__label-text'>Personaje:</span>
        <input
          className='new-quote__text'
          type='text'
          name='character'
          id='character'
          value={quoteObject.character}
          onChange={handleInputs}
        />
        <button onClick={handleNewQuote} className='new-quote__btn'>
          Añadir un nueva frase
        </button>
      </form>
    </div>
  );
};

export default App;
