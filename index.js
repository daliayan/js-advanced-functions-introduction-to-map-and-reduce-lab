// Your code here
function mapToNegativize(num) {
    let w = []
    for (let i = 0; i < num.length; i++){
        w.push(-1 * num[i])
    }
    return w
}

function mapToNoChange(num){
    let w = []
    for (let i = 0; i < num.length; i++){
        w.push(num[i])
    }
    return w
}

function mapToDouble(num){
    let w = []
    for (let i = 0; i < num.length; i++){
        w.push( 2 * num[i])
    }
    return w
}

function mapToSquare(num){
    let w = []
    for (let i = 0; i < num.length; i++){
        w.push( num[i] * num[i])
    }
    return w
}

function reduceToTotal(num, startingPoint=0){
    let total = startingPoint
    for (let i = 0; i < num.length; i++){
        total = total + num[i]
    }
    return total
}

function reduceToAllTrue(num){
    for (let i = 0; i < num.length; i++){
        if (!num[i]) return false 
    }
    return true
}

function reduceToAnyTrue(num){
    for (let i = 0; i < num.length; i++){
        if (num[i]) return true
    }
    return false
}