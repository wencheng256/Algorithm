/**
 * 算法导论 - 线性时间复杂度求无序数组第n大的数
 */


function getIndex(arr, n){
    var length = arr.length;
    if(n > arr){
        return -1;
    }

    var soldier = parseInt(Math.random() * length);
    swap(arr, 0, soldier);

    var step = 0;
    for(var i = 1; i< length; i++){
        if(arr[i] < arr[0]){
            swap(arr, ++step, i);
        }
    }
    swap(arr, 0, step);

    if(step+1 == n){
        return arr[step];
    }
    if(n > step){
        return getIndex(arr.slice(step+1, n+1), n-step-1);
    }else{
        return getIndex(arr.slice(0, step), n);
    }
}

function swap(arr, from, to){
    var temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
}

console.log(getIndex([1,2,3,4,5,6,7,8,9], 5));