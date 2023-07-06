import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import styles from '../styles/style'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../staticdata/data'
import ProductCard from '../components/ProductCard/ProductCard'

const ProductsPage = () => {
    const [data, setData] = useState([])
    const [searchParams] = useSearchParams();
    const categoryData = searchParams.get("category");
    useEffect(() => {
        if (categoryData === null) {
            const d = productData && productData.sort((a, b) => a.total_sell - b.total_sell)
            setData(d)
        } else {
            const d = productData && productData.filter((i) => i.category === categoryData)
            setData(d)
        }
    }, [categoryData])
    return (
        <div>
            <Header activeHeading={3} />
            <br /><br />
            <div className={`${styles.section}`}>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                    {
                        data && data.map((i, index) => <ProductCard data={i} key={index} />)
                    }
                </div>
                {
                    data && data.length === 0 ? (
                        <h1 className='text-center w-full pb-[110px] text-[20px]'>No products found</h1>
                    ) : null
                }
            </div>
        </div>
    )
}

export default ProductsPage