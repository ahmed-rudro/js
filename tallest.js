// function maxInArray(number){
// for(let i = 0; i < number.length; i++){
//     let largest = number[0];
//     const index =i;
//     const element = number[index];
//     if(element > largest){
//         largest = element;
//     }
// }
// return largest;
// }
// const heights = [267,290,230,269,237];
// const tallest = maxInArray(heights);
// console.log(tallest);

function maxInArray(number) {
    let largest = number[0];  // Initialize outside the loop
    
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element > largest) {
            largest = element;
        }
    }
    
    return largest;
}

const heights = [267, 290, 230, 269, 237];
const tallest = maxInArray(heights);
console.log(tallest);


