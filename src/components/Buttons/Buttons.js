import React from 'react';

const Buttons = (props) => {
    const { time, handleBreakTime } = props;
    return (
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <button onClick={() => handleBreakTime(time.time)} className="btn btn-active border-0 px-3 py-2 bg-blue-400 rounded-full text-sm">{time.time}</button>
        </div>
    );
};

export default Buttons;