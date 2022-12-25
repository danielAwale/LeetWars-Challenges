/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const newNums = [];
    let num = 0;
    // loop over the nums
    for (let i of nums) {
        num += i
        newNums.push(num)
    }

    return newNums

};