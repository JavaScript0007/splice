const arr = ['Armenia', 'Brazil', 'France', 'Germany']

console.log(arr)

// insert Denmark at 2 index without delition
arr.splice(2, 0, 'Denmark')

console.log(arr)

// insert USA at index of 3 with deletion next 2 elements
arr.splice(3, 2, 'USA')

console.log(arr)
