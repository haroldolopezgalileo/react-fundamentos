// Este componente muestra un saludo en el idioma actual

import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';


const Greeting = () => {
  const { language } = useContext(LanguageContext);

  return (
    <h2>
      {language === 'es' ? '¡Hola, bienvenido!' : 'Hello, welcome!'}
    </h2>
  );
};

export default Greeting;
