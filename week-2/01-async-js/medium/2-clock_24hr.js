function displayTime()
{
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let session = "AM";

    if(hours > 12)
    {
        hours = hours - 12;
        session = "PM";
    }

    else if(hours===12)
    {
        if(mins > 0 || secs > 0)
        {
            session = "PM";
        }
    }

    if(hours === 0)
    {
        hours = 12;
        session = "AM";
    }   

    if(hours < 10)
    {
        hours = "0" + hours;
    }

    if(mins < 10)
    {
        mins = "0" + mins;
    }

    if(secs < 10)
    {
        secs = "0" + secs;
    }

    console.log(hours + ":" + mins + ":" + secs + " " + session);
}


setInterval(displayTime,1000);