const every = <Type,>(items: Type[], callback: (item: Type) => boolean): boolean => {
    let result = true
    items.forEach((item) => {
        if (!callback(item)) {
            result = false
        }
    })

    return result
}

// console.log(every([1, 3, 9], n => n < 10));

// Flattening ALL
// use Generics
// “flatten all” an array of nested arrays into a 
// single array that has all the elements of 
// the original arrays.

// Example
// input: [[1, 2, 3], [4, [8, 9, [10, 11]], 5], [6]]
// output: [1, 2, 3, 4, 8, 9, 10, 11, 5, 6]

const flatAll = <Type,>(input: Type[]) => {

    let result: Type[] = []

    input.forEach((item) => {
        if (Array.isArray(item)) {
            result = [...result, ...flatAll(item)]
        } else {
            result.push(item)
        }
    })

    return result
}

console.log(flatAll([112, 123, 3, [234, 234, [1232, 123]]]));