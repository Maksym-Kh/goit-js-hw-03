function filterArray(numbers, value) {
    // задаєм новий пустив масив
    let newArray = [];
    // numberElement змінна до якої при кожній ітерації буде записуватись  поточний ел масиву/ numbers  зміна яку перебирають по одному знач
    for (const numberElement of numbers) {
// якщо ел змінної більший за значення 
        if (numberElement > value) {
            // то додаєм до пустого масиву нове знач
        newArray.push(numberElement);
        }
        // якщо ні то з пустим масивом нічого не робим 
         else {
        newArray;
        }
        
    }
//    повертаєм в консоль
    return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]