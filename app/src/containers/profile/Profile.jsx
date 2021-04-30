import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../../components/navbar/Navbar';
import Modal from '../../components/modal/Modal';



const Profile = () => {
    return (
        <div className="profile">
            <Navbar/>
            <br/>
            <Modal/>
        </div>
    )
}

export default Profile
