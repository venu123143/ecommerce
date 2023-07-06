import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import styles from '../styles/style'
import { productData } from '../staticdata/data'
import ProductCard from '../components/ProductCard/ProductCard'

const BestSelling = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell)
        setData(d)
        // window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header activeHeading={2} />
            <br /><br />
            <div className={`${styles.section}`}>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                    {
                        data && data.map((i, index) => <ProductCard data={i} key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default BestSelling