import React from 'react';

const Category = ({ category }) => {
    // console.log(category)
    const { name, time, img } = category
    return (
        <div>
            <div className="card card-compact bg-gray-100 shadow-xl p-2">
                <img className='w-full h-52 rounded-lg' src={img} alt="Shoes" />
                <div className="card-body text-black ">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    <p>Time Required: {time}S</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;