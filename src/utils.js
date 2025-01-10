export const GetDate = () => {
    let _date = new Date();

    let date = new Intl.DateTimeFormat(`en-US`, {
        weekday: `long`,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
    }).format(_date);

    let datewTime = _date;

    return {
        date,
        datewTime,
    }
};