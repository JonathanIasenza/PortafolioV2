import React, { useState } from 'react'
import MensajesEspañol from '../lang/es-AR.json'
import MensajesIngles from '../lang/en-US.json'
import { IntlProvider } from 'react-intl'

const langContext = React.createContext();

const LangProvider = ({children}) => {
    const [ mensajes, setMensajes ] = useState(MensajesEspañol);
    const [ locale, setLocale ] = useState('es-AR');

    const languageFunction = (language) => {
        switch (language){
            case 'es-AR':
                setMensajes(MensajesEspañol);
                setLocale('es-AR');
                document.getElementById('btn-es').style.filter = "grayscale(0%)";
                document.getElementById('btn-en').style.filter = "grayscale(100%)";
                break;

            case 'en-US':
                setMensajes(MensajesIngles);
                setLocale('en-US');
                document.getElementById('btn-es').style.filter = "grayscale(100%)";
                document.getElementById('btn-en').style.filter = "grayscale(0%)";
                break;

            default:
                setMensajes(MensajesEspañol);
                setLocale('es-AR');
        }
    }

    return(
        <langContext.Provider value={{languageFunction: languageFunction}}>
           <IntlProvider locale={locale} messages={mensajes}>
               {children}
           </IntlProvider>
        </langContext.Provider>
    );
}

export {LangProvider, langContext}