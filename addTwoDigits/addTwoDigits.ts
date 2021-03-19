export function addTwoDigits(n: any): number {
 let nums = n.toString().split('');

 return nums.reduce((a, b) =>{
     return parseInt(a) + parseInt(b);
 })
}

console.log(addTwoDigits(29));