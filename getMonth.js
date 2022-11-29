export function  getMonth(num) {
    let months, result;
    months = [
    "январь", 
    "февраль", 
    "март", 
    "апрель", 
    "май", 
    "июнь", 
    "июль", 
    "август", 
    "сентябрь", 
    "октябрь", 
    "ноябрь", 
    "декабрь"
    ];

    if (num => 0 && num <= 12){
        result = `Сейчас ${months[num]}`;
    } else result = "В году только 12 месяцев"
    return result
}