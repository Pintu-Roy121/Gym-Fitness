import React from 'react';

const Questions = () => {
    return (
        // <div className='m-5 bg-gray-100 shadow-xl'>
        //     <h1 className='text-5xl text-black font-bold'>Hello</h1>
        // </div>
        <div className='m-5 mb-20 flex flex-col gap-4'>
            <div>
                <label htmlFor="my-modal-5" className="btn modal-button w-full text-xl md:text-3xl font-semibold bg-gray-400 text-black border-none">How does React Works?</label>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-2xl">How does React Works?</h3>
                        <p className="py-4 text-lg font-medium">ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="my-modal-1" className="btn modal-button w-full text-xl md:text-3xl font-semibold bg-gray-400 text-black border-none">What is difference between state and props?</label>
                <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-2xl">What is difference between state and props?</h3>
                        <p className="py-4 text-lg font-medium"><strong className='text-2xl'>Props: </strong>The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components.Props are read-only.Props are used to pass data from one component to another. </p>
                        <p className="py-4 text-lg font-medium"><strong className='text-2xl'>State: </strong>The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component.State is both read and write.The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-1" className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="my-modal-2" className="btn modal-button w-full text-xl md:text-3xl font-semibold bg-gray-400 text-black border-none">What is te purpose of UseEffect without data fetch ?</label>
                <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-2xl">What is te purpose of UseEffect without data fetch ?</h3>
                        <p className="py-4 text-lg font-medium">
                            <li>1. Add an event listener for a button.</li>
                            <li>2. Perform an action when state or props change.</li>
                            <li>3. Clean up event listeners when the component unmounts.</li>
                            It's important to use Dependency Arrays correctly to optimize your useEffect Hook. One important use of these Hooks is to prevent unnecessary re-renders even when nothing changes.
                        </p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-2" className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Questions;