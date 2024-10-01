module.exports = { getCalendar, getCurrentMonth, getListOfMonths }

function getCalendar() {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const daysInMonth = endOfMonth.getDate();

    const calendar = [];

    for (let i = 0; i < daysInMonth; i++) {
        const date = new Date(startOfMonth.getTime());
        date.setDate(i + 1);
        calendar.push({
            date: date.getDate(),
            dayOfWeek: date.getDay(),
            actions: []
        });
    }

    return calendar;
}

function getListOfMonths() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

function getCurrentMonth() {
    const today = new Date();
    return today.getMonth();
}