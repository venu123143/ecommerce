import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import styles from '../styles/style'
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'

const FAQ = () => {
    return (
        <div>
            <Header activeHeading={5} />
            <Faq />
        </div>
    )
}

const Faq = () => {
    const [activeTab, setActiveTab] = useState(0);
    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setActiveTab(0)
        } else {
            setActiveTab(tab)
        }
    }
    return (
        <div className={`${styles.section} my-8`}>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>FAQ</h2>
            <div className="mx-auto space-y-4">
                {/* single faq */}
                <div className="border-b border-gray-200 pb-4">
                    <button
                        className='flex items-center justify-between w-full'
                        onClick={() => toggleTab(1)}>
                        <span className='text-lg font-medium text-gray-900'>How do I track my order ?</span>
                        {
                            activeTab === 1 ? (
                                <AiFillCaretDown size={22} />
                            ) : (

                                <AiFillCaretRight size={22} />

                            )
                        }

                    </button>
                    {activeTab === 1 ? (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We typically process and ship orders within 1-2 business days.
                                Depending on your location, it can take an additional 2-7 days for your order to arrive.
                            </p>
                        </div>
                    ) : null}
                </div>
                {/* single faq */}
                <div className="border-b border-gray-200 pb-4">
                    <button
                        className='flex items-center justify-between w-full'
                        onClick={() => toggleTab(2)}>
                        <span className='text-lg font-medium text-gray-900'>How do I track my order ?</span>
                        {
                            activeTab === 2 ? (
                                <AiFillCaretDown size={22} />
                            ) : (

                                <AiFillCaretRight size={22} />

                            )
                        }

                    </button>
                    {activeTab === 2 ? (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We typically process and ship orders within 1-2 business days.
                                Depending on your location, it can take an additional 2-7 days for your order to arrive.
                            </p>
                        </div>
                    ) : null}
                </div>
                {/* single faq */}
                <div className="border-b border-gray-200 pb-4">
                    <button
                        className='flex items-center justify-between w-full'
                        onClick={() => toggleTab(3)}>
                        <span className='text-lg font-medium text-gray-900'>How do I track my order ?</span>
                        {
                            activeTab === 3 ? (
                                <AiFillCaretDown size={22} />
                            ) : (

                                <AiFillCaretRight size={22} />

                            )
                        }

                    </button>
                    {activeTab === 3 ? (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We typically process and ship orders within 1-2 business days.
                                Depending on your location, it can take an additional 2-7 days for your order to arrive.
                            </p>
                        </div>
                    ) : null}
                </div>
                {/* single faq */}
                <div className="border-b border-gray-200 pb-4">
                    <button
                        className='flex items-center justify-between w-full'
                        onClick={() => toggleTab(4)}>
                        <span className='text-lg font-medium text-gray-900'>How do I track my order ?</span>
                        {
                            activeTab === 4 ? (
                                <AiFillCaretDown size={22} />
                            ) : (

                                <AiFillCaretRight size={22} />

                            )
                        }

                    </button>
                    {activeTab === 4 ? (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We typically process and ship orders within 1-2 business days.
                                Depending on your location, it can take an additional 2-7 days for your order to arrive.
                            </p>
                        </div>
                    ) : null}
                </div>
                {/* single faq */}
                <div className="border-b border-gray-200 pb-4">
                    <button
                        className='flex items-center justify-between w-full'
                        onClick={() => toggleTab(5)}>
                        <span className='text-lg font-medium text-gray-900'>How do I track my order ?</span>
                        {
                            activeTab === 5 ? (
                                <AiFillCaretDown size={22} />
                            ) : (

                                <AiFillCaretRight size={22} />

                            )
                        }

                    </button>
                    {activeTab === 5 ? (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We typically process and ship orders within 1-2 business days.
                                Depending on your location, it can take an additional 2-7 days for your order to arrive.
                            </p>
                        </div>
                    ) : null}
                </div>
                {/* single faq */}
                <div className="border-b border-gray-200 pb-4">
                    <button
                        className='flex items-center justify-between w-full'
                        onClick={() => toggleTab(6)}>
                        <span className='text-lg font-medium text-gray-900'>How do I track my order ?</span>
                        {
                            activeTab === 6 ? (
                                <AiFillCaretDown size={22} />
                            ) : (

                                <AiFillCaretRight size={22} />

                            )
                        }

                    </button>
                    {activeTab === 6 ? (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We typically process and ship orders within 1-2 business days.
                                Depending on your location, it can take an additional 2-7 days for your order to arrive.
                            </p>
                        </div>
                    ) : null}
                </div>
                {/* single faq */}
                <div className="border-b border-gray-200 pb-4">
                    <button
                        className='flex items-center justify-between w-full'
                        onClick={() => toggleTab(7)}>
                        <span className='text-lg font-medium text-gray-900'>How do I track my order ?</span>
                        {
                            activeTab === 7 ? (
                                <AiFillCaretDown size={22} />
                            ) : (

                                <AiFillCaretRight size={22} />

                            )
                        }

                    </button>
                    {activeTab === 7 ? (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We typically process and ship orders within 1-2 business days.
                                Depending on your location, it can take an additional 2-7 days for your order to arrive.
                            </p>
                        </div>
                    ) : null}
                </div>
                {/* single faq */}
                <div className="border-b border-gray-200 pb-4">
                    <button
                        className='flex items-center justify-between w-full'
                        onClick={() => toggleTab(8)}>
                        <span className='text-lg font-medium text-gray-900'>How do I track my order ?</span>
                        {
                            activeTab === 8 ? (
                                <AiFillCaretDown size={22} />
                            ) : (

                                <AiFillCaretRight size={22} />

                            )
                        }

                    </button>
                    {activeTab === 8 ? (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We typically process and ship orders within 1-2 business days.
                                Depending on your location, it can take an additional 2-7 days for your order to arrive.
                            </p>
                        </div>
                    ) : null}
                </div>
                {/* single faq */}
                <div className="border-b border-gray-200 pb-4">
                    <button
                        className='flex items-center justify-between w-full'
                        onClick={() => toggleTab(9)}>
                        <span className='text-lg font-medium text-gray-900'>How do I track my order ?</span>
                        {
                            activeTab === 9 ? (
                                <AiFillCaretDown size={22} />
                            ) : (

                                <AiFillCaretRight size={22} />

                            )
                        }

                    </button>
                    {activeTab === 9 ? (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We typically process and ship orders within 1-2 business days.
                                Depending on your location, it can take an additional 2-7 days for your order to arrive.
                            </p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default FAQ