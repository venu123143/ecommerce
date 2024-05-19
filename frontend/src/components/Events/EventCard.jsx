import React from 'react'
import styles from '../../styles/style'
import CountDown from "../CountDown/CountDown"

const EventCard = ({ active, image, name, price }) => {
    return (
        <div className={`w-full block bg-white rounded-lg ${active ? "unset" : 'mb-12'} lg:flex p-2 mb-10`}>
            <div className="w-full lg:w-[50%] m-auto">
                {/* <img src="https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1" alt="" /> */}
                <img src={image ? image[0].url : "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1"}  />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col justify-center">
                <h2 className={`${styles.productTitle}`}>{name ? name : "titan watch"}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi? Maiores voluptatibus obcaecati laudantium ullam
                    praesentium impedit quas nesciunt mollitia, adipisci modi veniam. Vel quidem aperiam voluptates voluptas, cumque facere repudiandae
                    labore iusto? Et, nemo enim. Assumenda delectus quasi reprehenderit ducimus cumque, amet asperiores impedit laboriosam possimus nihil
                    minima laborum, excepturi architecto voluptatum laudantium nesciunt quae iure aspernatur aperiam accusamus.</p>
                <div className="flex py-2 justify-between">
                    <div className="flex">
                        <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">109$</h5>
                        <h5 className={`font-bold text-[20px] text-[#333] font-Roboto`}>{price ? price : 99}$</h5>
                    </div>
                    <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">30 sold</span>
                </div>
                <CountDown />
            </div>
        </div>
    )
}

export default EventCard