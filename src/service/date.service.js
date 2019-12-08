export const monthsLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
export const monthsShort = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export const daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const dateFormatTypes = {
    'Material': 'materialCardExample'
};

const leftPad = (number, targetLength) => {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
};

const dateFormats = {
    materialCardExample: (date) => {
        return `${monthsLong[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ` + 
        `${leftPad(date.getHours(), 2)}:${leftPad(date.getMinutes(), 2)}`;
    }
};

const dateService = {
    formatDate: (date, format) => {
        return dateFormats[format](date);
    },
    getDateFromTime: (time) => {
        const date = new Date();
        date.setTime(time);
        return date;
    }
};

export default dateService;