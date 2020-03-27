import React, { useState, useContext } from 'react'
import { languageOptions, dictionaryList } from './options'

const LanguageContext = React.createContext({
    language: languageOptions[0],
    dictionary: dictionaryList[languageOptions[0].id]
})
export default LanguageContext

export const LanguageProvider = ({ children }) => {
    const languageContext = useContext(LanguageContext)
    const [language, setLanguage] = useState(languageContext.language)
    const [dictionary, setDictionary] = useState(languageContext.dictionary)

    const provider = {
        language,
        dictionary,
        setLanguage: selectedLanguage => {
            setLanguage(selectedLanguage)
            setDictionary(dictionaryList[selectedLanguage.id])
        }
    }

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}
