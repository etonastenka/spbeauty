import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='adrss d-inline-flex flex-column gap-5 me-5 justify-content-between col'>
            <div>
                <div className='title pb-4'>Адреса заведений</div>
                <div className='caption d-flex flex-column gap-2'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    
                </div>
            </div>
            <div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;