/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {

    let p = new Promise(function(resolve){

        setTimeout(resolve, 1000);
    });

    return p;
}

function waitTwoSecond() {

    let p = new Promise(function(resolve){

        setTimeout(resolve, 2000);
    });

    return p;

}

function waitThreeSecond() {

    let p = new Promise(function(resolve){

        setTimeout(resolve, 3000);
    });

    return p;

}

async function calculateTime() {

    const starttime = Date.now();

    await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((values) => {
        console.log(values);
        
    });

    const endtime = Date.now();
    console.log((endtime-starttime)/1000 + " seconds");
}


calculateTime();