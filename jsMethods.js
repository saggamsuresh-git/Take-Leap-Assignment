const arr = [1,2,3,4,5,6,7,8,9]

function javascriptMethods(arr){
    //map
    const mapped = arr.map(a => a*a)
    console.log(mapped)

    //reduce
    const reduced_sum = arr.reduce((acc,currentValue)=> acc+currentValue,0)
    console.log(reduced_sum)

    //filter
    const even_numbers = arr.filter(a=> a%2===0)
    console.log(even_numbers)

    //flatMap (flat + map)
    const flat_Map = arr.flatMap(a => a=== 2 ? [a,a+a] : a)
    console.log(flat_Map)
}

javascriptMethods(arr)
