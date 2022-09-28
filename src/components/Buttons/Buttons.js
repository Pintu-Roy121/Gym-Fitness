import React from 'react';

const Buttons = (props) => {
    const { time } = props.time
    console.log(time);
    return (
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <button className="btn btn-active border-0 px-3 py-2 bg-blue-400 rounded-3xl text-sm">{time}s</button>
        </div>
    );
};

export default Buttons;