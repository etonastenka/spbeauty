import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '28px' : props.minWidth;
    const Button = styled.div`
        background: #FFF;
        border-radius: 24px;
        border: solid #E2E8F0 1px;
        min-width: ${minWidth};
        color: #94A3B8;
        &:hover {
            opacity: 0.8;
        }
        &:active {
            opacity: 0.6;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;