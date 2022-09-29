const addToDB = (time) => {
    if (time) {
        localStorage.setItem('Break-time', JSON.stringify(time));
    } else {
        time = 0;
    }
}

const getItem = () => {
    const getStored = JSON.parse(localStorage.getItem('Break-time'));
    return getStored;
}

export { addToDB, getItem }
