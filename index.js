const express = require('express');
const app = express();
const port = 3000;
const calendar = require('./calendar.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // Generate the calendar data here
    const calendarData = calendar.getCalendar();
    const currentMonth = calendar.getCurrentMonth();
    const monthsDropDown = calendar.getListOfMonths();
    console.log(currentMonth);
    res.render('index', { calendar});
});

app.post('/action', (req, res) => {
    // Handle the action here
    const { date, action } = req.body;

    // Perform the desired action based on the date and action
    console.log(`Action: ${action} on ${date}`);

    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

