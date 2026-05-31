function fibs(n) {
    let array = [];
    for(let i = 0; i < n; i++) {
        if (i == 0) {
            array.push(0);
        } else if ( i == 1 || i == 2) {
            array.push(1)
        } else {
            array.push((array[array.length-1]) + array[array.length-2]);
        }
        
    }
    console.log(array);
}


(fibs(8));