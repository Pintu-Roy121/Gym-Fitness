import React from 'react';

const Category = ({ category, handleTime }) => {
    const { name, time, img, description, age } = category
    return (
        <div>
            <div className="card card-compact bg-gray-100 shadow-lg shadow-gray-400 p-2">
                <img className='w-full sm:h-60 md:h-44 rounded-lg' src={img} alt="Shoes" />
                <div className="card-body text-black m-[-10px]">
                    <h2 className="card-title text-2xl md:text-lg lg:text-2xl font-bold">{name}</h2>
                    <p className='text-lg mt-[-10px] '>{description.length > 80 ? description.slice(0, 80) : 'NO Description'}...</p>
                    <p className='text-base mt-2 font-medium'>For Age: {age}years</p>
                    <p className='text-lg font-semibold'>Time Required: {time}s</p>
                    <div className="card-actions">
                        <button onClick={() => handleTime(category)} className="btn btn-success text-white font-bold w-full">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;