import React from 'react'
import styles from '../../styles/style'
import { navItems } from '../../staticdata/data'
import { Link } from 'react-router-dom'

const Navbar = ({ active }) => {
    return (
        <div className={`${styles.noramlFlex}`}>
            {navItems && navItems.map((i, index) => (
                <div className="flex" >
                    <Link to={i.url} className={`${active === index + 1 ? "text-[#17dd1f]" : "text-[#fff] font-[500] px-6 cursor-pointer"}`}>
                        {i.title}
                    </Link>
                </div>
            ))
            }
        </div>
    )
}

export default Navbar