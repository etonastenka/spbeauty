import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '28px' : props.minWidth; 
    const Button = styled.div`
        margin-top: 8px;
        background: #3B82F6;
        border-radius: 24px;
        min-width: ${minWidth};
        color: white;
        &:hover {
            opacity: 0.8;
        }
        &:active {
            background: #0F172A
            opacity: 0.6;
        }
    `;
    return (
        <Clickable>
            <Button className='px-3 py-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;