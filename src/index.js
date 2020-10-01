
exports.min = function min (array) {

    if ((array || []).length === 0){
        return 0;
    }

    let min = Math.min.apply(null, array);
    return min;

}

exports.max = function max (array) {
  
    if ((array || []).length === 0){
        return 0;
    }
    let max = Math.max.apply(null, array);
    return max;

}

exports.avg = function avg (array) {
  
    if ((array || []).length === 0){
        return 0;
    }

    let sum = array[0];
    let average = 0;
    for(let i = 1; i < array.length; i++){
        sum += array[i];  
        average = sum / array.length;
    }
    return average;

}
