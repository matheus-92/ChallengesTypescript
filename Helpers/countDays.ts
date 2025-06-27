const daysOfTheWeek:Record<string,number> = {
    "sunday": 0,
    "monday":1,
    "tuesday":2,
    "wednesday":3,
    "thurday":4,
    "friday":5,
    "saturday":6
} 

function daysInAMonth(year:number,month:number)
{
    return new Date(year,month +1,0).getDate();            
}

export function countDay(day:string)
{
    let count:number = 0;
    const number:number = daysOfTheWeek[day]
    
    for(let year=1901; year <= 2000; year++)
    {
        for(let month = 0; month< 12; month++)
        {
            let numberOfDays:number = daysInAMonth(year,month);
            for(let day = 1;day <=numberOfDays; day++)
            {
                const date = new Date(year, month, day)

                if(date.getDay() == number && date.getDate() == 1)
                {
                    count++
                }
            }

        }
    }

    return count++;
}