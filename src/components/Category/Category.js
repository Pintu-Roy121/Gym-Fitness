import React from 'react';

const Category = ({ category, handleTime }) => {
    const { name, time, img } = category
    return (
        <div>
            <div className="card card-compact bg-gray-100 shadow-xl p-2">
                <img className='w-full sm:h-60 md:h-52 rounded-lg' src={img} alt="Shoes" />
                <div className="card-body text-black ">
                    <h2 className="card-title text-2xl md:text-lg lg:text-2xl font-bold">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    <p className='text-lg font-semibold'>Time Required: {time}s</p>
                    <div className="card-actions">
                        <button onClick={() => handleTime(category)} className="btn btn-primary w-full">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;