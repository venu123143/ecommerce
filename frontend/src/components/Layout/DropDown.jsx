import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../../styles/style';

const DropDown = ({ categoriesData, setDropDown }) => {
    const navigate = useNavigate();

    const handleSubmit = (i) => {
        navigate(`/products?category=${i.title}`)
        setDropDown(false)
        // window.location.reload()
    }
    return (
        <div className='pb-4 w-[270px] bg-[#fff] absolute z-10 rounded-b-md shadow-sm '>
            {categoriesData && categoriesData.map((i, index) => (
                <div key={index}
                    className={`${styles.noramlFlex} hover:bg-[#d3d3d3] cursor-pointer  `}
                    onClick={() => handleSubmit(i)}>
                    <img src={i.image_Url} style={{ width: '25px', height: '25px', objectFit: 'contain', marginLeft: '10px', userSelect: 'none' }} alt="imagealternative" />
                    <h3 className='m-3 cursor-pointer select-none'>{i.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default DropDown