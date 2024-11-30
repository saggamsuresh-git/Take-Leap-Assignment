const reverse_a_string=(string)=>{
    const arr = string.split("")
    // console.log(arr)
    const reversed_arr = arr.reverse()
    result = reversed_arr.join("")
    console.log(result)
}

const string = 'Suresh'
reverse_a_string(string)