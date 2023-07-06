import React from 'react'
import Header from '../components/Layout/Header'
import Hero from '../components/Route/Hero'
import Categories from '../components/Route/Categories'
import BestDeals from '../components/Route/BestDeals'
import FeatureProduct from '../components/Route/FeatureProduct'
import Events from '../components/Events/Events'
import Sponsored from "../components/Route/Sponsored.jsx"
import Footer from "../components/Layout/Footer"
const HomePage = () => {
    return (
        <>
            <Header activeHeading={1} />
            <Hero />
            <Categories />
            <BestDeals />
            <Events />
            <FeatureProduct />
            <Sponsored />
            <Footer />
        </>
    )
}

export default HomePage