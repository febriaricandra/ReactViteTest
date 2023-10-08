export const strTime = (time) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const timeString = date.toLocaleTimeString();

    return `${year} ${month} ${day} ${timeString.split('.').join(':')}`;
};
