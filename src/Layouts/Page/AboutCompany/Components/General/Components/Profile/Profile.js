import Avatar from "./Avatar";
function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-3 gap-2 d-inline-flex flex-column justify-content-center'>
                <div className='title'>SPBEAUTY</div>
                <div className="text-rg-bd">Салон красоты</div>
                <div className="text-rg-bd">Санкт-Петербург, Невский пр-т. 28</div>
            </div>                  
        </div>
    );
}

export default Profile;