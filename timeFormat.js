const timeFormatSecond = (value) => {
    if (value) {
        value = +value * (value.toString().length === 10 ? 1000 : 1);

        let date = new Date(value);

        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds();

        return [year, month < 10 ? '0' + month : month, day < 10 ? '0' + day : day].join('-') + ' ' + 
            [hour < 10 ? '0' + hour : hour, minute < 10 ? '0' + minute : minute, second < 10 ? '0' + second : second].join(':');
    }

    return value || '';
}

const timeFormat = (value) => {
    if (value) {
        value = +value * (value.toString().length === 10 ? 1000 : 1);

        let date = new Date(value);

        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes();

        return [year, month < 10 ? '0' + month : month, day < 10 ? '0' + day : day].join('-');
    }

    return value || '';
}
export default {
    timeFormatSecond,
    timeFormat
}
export {
    timeFormatSecond,
    timeFormat
}
