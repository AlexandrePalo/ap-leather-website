import React, { useContext, useState } from 'react'
import { animated, useSprings } from 'react-spring'
import { languageOptions } from './options'
import LanguageContext from './context'

const LanguageSelector = () => {
    const languageContext = useContext(LanguageContext)
    const [hovered, setHovered] = useState(null)
    const springs = useSprings(
        languageOptions.length,
        languageOptions.map(item => ({
            color:
                item.id === hovered
                    ? 'white'
                    : item.id === languageContext.language.id
                    ? 'white'
                    : 'hsl(190, 7%, 70%)'
        }))
    )

    const handleLanguageChange = id => {
        const selectedLanguage = languageOptions.find(item => item.id === id)
        languageContext.setLanguage(selectedLanguage)
    }

    return (
        <div className="flex flex-row">
            {springs.map((props, i) => (
                <animated.div
                    style={props}
                    key={i}
                    className={`text-white cursor-pointer ${
                        i !== languageOptions.length ? 'mr-2' : ''
                    }`}
                    onClick={() => handleLanguageChange(languageOptions[i].id)}
                    onMouseEnter={() => setHovered(languageOptions[i].id)}
                    onMouseLeave={() => setHovered(null)}
                >
                    {languageOptions[i].text}
                </animated.div>
            ))}
        </div>
    )
}

export default LanguageSelector
