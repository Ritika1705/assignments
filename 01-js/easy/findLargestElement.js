/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    var max_no = numbers[0];
    for(var i=0;i<numbers.length;i++)
    {
        if(numbers[i] > max_no)
        {
            max_no = numbers[i];
        }
    }
    
    return max_no;
}

module.exports = findLargestElement;