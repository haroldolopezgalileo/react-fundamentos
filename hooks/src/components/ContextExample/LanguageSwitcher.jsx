// Este componente es un botón para cambiar de idioma

import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';


const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage}>
      {language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
    </button>
  );
};

export default LanguageSwitcher;
