import React from 'react';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../images/profile.png'
const Profile = () => {
    return (
        <div>
            <div className='flex'>
                <img className='w-14 bg-white rounded-full mr-4' src={img} alt="" />
                <div>
                    <h1 className='text-lg text-black font-bold'>Pintu Roy</h1>
                    <p className='text-gray-500 font-semibold'><FontAwesomeIcon icon={faLocation} /> Dhaka, Mirpur</p>
                </div>
            </div>
            <div className='flex justify-between mt-8 bg-slate-50 p-2 rounded-lg'>
                <div className='flex flex-col items-center'>
                    <h1><span className='text-lg text-black font-bold'>75</span>kg</h1>
                    <p>Weight</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-lg text-black font-bold'>5.5'</h1>
                    <p>Height</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-lg text-black font-bold'>25</h1>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;