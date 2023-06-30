function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot: number = arr[Math.floor(arr.length / 2)];
    const less: number[] = [];
    const equal: number[] = [];
    const greater: number[] = [];

    for (let element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element > pivot) {
            greater.push(element);
        } else {
            equal.push(element);
        }
    }

    return quickSort(less).concat(equal, quickSort(greater));
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
