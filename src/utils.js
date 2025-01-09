export const getDate = () => {

    const date = new Date();

    return new Intl.DateTimeFormat(`default`, {
        weekday: `long`,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
    }).format(date);

};