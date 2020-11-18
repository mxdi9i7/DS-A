const arr = [1, 2, 4, 5, 7, 8, 9]; // sorted array

const search = (arr, n) => {
    if (!arr) return -1;

    let left = 0, right = arr.length - 1, mid;

    while (left !== right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === n) return mid;
        if (arr[left] === n) return left;
        if (arr[right] === n) return right;
        if (n > arr[mid]) {
            left = mid + 1;
        } else if (n < arr[mid]) {
            right = mid - 1;
        }
    }
    return -1;
}

const recurSearch = (arr, n, left, right) => {
    if (!arr) return -1;
    if (left === right) return - 1;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === n) return mid;
    if (arr[left] === n) return left;
    if (arr[right] === n) return right;
    if (n > arr[mid]) {
        left = mid + 1
    } else if (n < arr[mid]) {
        right = mid - 1
    }
    return recurSearch(arr, n, left, right)

}

console.log(search(arr, 9))
console.log(recurSearch(arr, 9, 0, arr.length))