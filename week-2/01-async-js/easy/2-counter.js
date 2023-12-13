var cnt=0;

function counter()
{
    cnt = cnt + 1;
    console.log(cnt);

    setTimeout(counter,1000);
}

counter();