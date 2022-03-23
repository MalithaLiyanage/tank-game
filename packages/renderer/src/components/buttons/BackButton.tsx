import './styles.css'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button className='back-button' onClick={() => navigate(-1)}>
            <FaArrowLeft />
        </button>
    )
}

export default BackButton;