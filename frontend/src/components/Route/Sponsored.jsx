import React from 'react'
import styles from '../../styles/style'

const Sponsored = () => {
    return (
        <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 my-12 cursor-pointer rounded-xl`}>
            <div className="flex justify-between w-full">
                <div className="flex items-start">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png" alt=""
                        style={{ width: "150px", objectFit: "contain" }} />
                </div>

                <div className="flex items-start">
                    <img src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo.png" alt=""
                        style={{ width: "150px", objectFit: "contain" }} />
                </div>

                <div className="flex items-start">
                    <img src="https://logos-world.net/wp-content/uploads/2020/05/LG-Logo.png" alt=""
                        style={{ width: "150px", objectFit: "contain" }} />
                </div>

                <div className="flex items-start">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png" alt=""
                        style={{ width: "150px", objectFit: "contain" }} />
                </div>

                <div className="flex items-start">
                    <img src="https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" alt=""
                        style={{ width: "150px", objectFit: "contain" }} />
                </div>
            </div>
        </div>
    )
}

export default Sponsored