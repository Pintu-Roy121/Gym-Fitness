import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Category from '../Category/Category';

const GymContainer = () => {
    const [categories, setCategories] = useState([]);


    useState(() => {
        fetch('gymcategory.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='m-5'>
            <div className='flex gap-4 mt-8'>
                <div>
                    <div className='flex text-blue-500 text-3xl items-center gap-4 mb-5'>
                        <FontAwesomeIcon className='text-4xl' icon={faDumbbell} />
                        <h1 className='text-4xl text-blue-500 font-semibold'> GYM FITNESS FOR HEALTH</h1>
                    </div>
                    <h1 className='text-4xl font-medium mb-8'>Select today's exercise</h1>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            categories.map((category) => <Category
                                category={category}
                                key={category.id}
                            />)
                        }
                    </div>
                </div>
                <div className='w-3/12 h-96  rounded-lg bg-orange-100 p-5 sticky top-0'>

                </div>
            </div>
        </div>
    );
};

export default GymContainer;