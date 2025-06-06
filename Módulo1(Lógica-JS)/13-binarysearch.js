function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        
        if (arr[mid] == target) {
            return mid  
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

let numbers = [1, 5, 7, 8, 10, 13, 14, 17, 19, 24]

console.log(binarySearch(numbers, 17))