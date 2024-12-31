/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    let sum=0
    nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length; i++){
        sum+=nums[i]
    }
    let average= nums[Math.floor((nums.length-1)/2)]
    // console.log(average)
    let moves=0
    // console.log(average)
    for(let i=0; i<nums.length; i++){
        // console.log(sum)
        if(nums[i]<average){
            moves+=average-nums[i]
        }
        else{
            moves+=nums[i]-average
        }
    }
    return moves
};
