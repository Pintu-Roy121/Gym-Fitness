const addToDB = (ClickTime) => {
    if (ClickTime) {
        localStorage.setItem('Break-time', JSON.stringify(ClickTime));
    }
}

const getItem = () => {
    const getStored = JSON.parse(localStorage.getItem('Break-time'));
    return getStored;
}

export { addToDB, getItem }
