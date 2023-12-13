/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {

    let p = new Promise(function(resolve){
        setTimeout(resolve,seconds);
    });

    return p;
}

console.log("hello");
sleep(3000).then(function(){
    console.log("world");
})