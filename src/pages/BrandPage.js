import React, { useContext } from 'react'
import creator from '../media/compressed/creator-compressor.jpg'
import LanguageContext from '../langs/context'

const BrandPage = () => {
    const lang = useContext(LanguageContext)
    const { brandPage } = lang.dictionary

    return (
        <div className="my-10 px-6">
            <div className="flex flex-row items-start justify-start max-w-xl mx-auto mb-10">
                <div
                    className="rounded-full h-32 w-32 flex-shrink-0 bg-cover bg-center border-2 border-secondary mr-8"
                    style={{ backgroundImage: `url(${creator})` }}
                />
                <div className="">
                    <p className="text-base text-primary">{brandPage.p1}</p>
                    <p className="text-base text-primary mt-6 max-w-xl mx-auto text-justify">
                        {brandPage.p2}
                    </p>
                    <p
                        className="text-base text-primary max-w-xl mx-auto mt-10 mb-10"
                        dangerouslySetInnerHTML={{ __html: brandPage.p3 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default BrandPage
