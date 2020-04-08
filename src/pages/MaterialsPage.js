import React, { useContext } from 'react'
import butteroLeather from '../media/compressed/buttero_leather-compressor.jpg'
import filChinois from '../media/compressed/fil_chinois-compressor.jpg'
import coutureSellier from '../media/compressed/couture_sellier-compressor.jpg'
import LanguageContext from '../langs/context'

const MaterialPage = () => {
    const lang = useContext(LanguageContext)
    const { leather, thread, stitch } = lang.dictionary.materialPage

    return (
        <div className="max-w-4xl mx-auto px-6">
            <Material
                title={leather.title}
                img={butteroLeather}
                imgAlt={leather.imgAlt}
            >
                <p className="text-base text-primary mt-6">{leather.p1}</p>
                <p
                    className="text-base text-primary mt-4"
                    dangerouslySetInnerHTML={{ __html: leather.p2 }}
                />
                <p
                    className="text-base text-primary mt-4"
                    dangerouslySetInnerHTML={{ __html: leather.p3 }}
                />
                <div className="mt-4 flex flex-row flex-wrap">
                    {leather.colors.map(c => (
                        <span className="text-sm flex flex-row items-center text-primary-lighter mr-4">
                            <span
                                className="rounded-full h-4 w-4 mr-1 inline-block"
                                style={{ backgroundColor: c.hex }}
                            />
                            {c.label}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-primary-lighter mt-2">
                    {leather.p4}
                </p>
            </Material>
            <Material
                title={thread.title}
                img={filChinois}
                imgAlt={thread.imgAlt}
            >
                <p
                    className="text-base text-primary mt-6"
                    dangerouslySetInnerHTML={{ __html: thread.p1 }}
                />
                <p className="text-base text-primary mt-6">{thread.p2}</p>
                <span className="mt-4 text-sm flex flex-row flex-wrap items-center text-primary-lighter">
                    <span
                        className="rounded-full h-4 w-4 mr-1 inline-block border border-solid border-primary-lighter border-px"
                        style={{ backgroundColor: thread.color.hex }}
                    />
                    {thread.color.label}
                </span>
                <p className="text-sm text-primary-lighter mt-2">{thread.p3}</p>
            </Material>
            <Material
                title={stitch.title}
                img={coutureSellier}
                imgAlt={stitch.imgAlt}
            >
                <p
                    className="text-base text-primary mt-6"
                    dangerouslySetInnerHTML={{ __html: stitch.p1 }}
                />
                <p className="text-base text-primary mt-6">{stitch.p2}</p>
            </Material>
        </div>
    )
}

const Material = ({ title, img, imgAlt, children }) => {
    return (
        <div className="flex flex-col sm:flex-row flex-start my-10">
            <div className="sm:w-2/3 sm:mr-8">
                <div className="relative w-full">
                    <span className="font-bold text-2xl text-secondary">
                        {title}
                    </span>
                    <div className="h-px w-full bg-secondary absolute left-0 top-full" />
                </div>
                {children}
            </div>
            <div className="sm:w-2/3 sm:pt-10 pt-4">
                <img
                    src={img}
                    alt={imgAlt}
                    className="object-cover object-center w-full h-full rounded-sm"
                    style={{ maxHeight: 400 }}
                />
            </div>
        </div>
    )
}

export default MaterialPage
