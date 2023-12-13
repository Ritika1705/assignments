function displayTime()
{
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

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

    console.log(hours + ":" + mins + ":" + secs);
}


setInterval(displayTime,1000);