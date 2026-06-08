function fibs(n) {
    let array = [];
    for(let i = 0; i < n; i++) {
        if (i == 0) {
            array.push(0);
        } else if ( i == 1 || i == 2) {
            array.push(1);
        } else {
            array.push((array[array.length-1]) + array[array.length-2]);
        }
        
    }
    console.log(array);
    return array;
}

(fibs(20));

function fibElement(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibElement(n-1) + fibElement(n - 2);
    }
}

console.log(fibElement(10));

function recursFib(n) {
    if (n == 0) {
        return [0];
    } else if (n == 1) {
        return [0,1];
    } else {
        const array = recursFib(n-1);
        array.push(array[array.length-1] + array[array.length-2]);
    }
}

//export {recursFib}