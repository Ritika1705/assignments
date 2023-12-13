/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

function calculateTime() {

    const starttime = Date.now();

    waitOneSecond().then(function(){
        waitTwoSecond().then(function(){
            waitThreeSecond().then(function(){
                const endtime = Date.now();
                console.log((endtime-starttime)/1000 + " seconds");
                //console.log("hi");
            });
        });
    });
}


calculateTime();