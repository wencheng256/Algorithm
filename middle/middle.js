function getIndex(arr, n, from, to){
    var length = to-from;
    if(n > arr){
        return -1;
    }

    var soldier = parseInt(Math.random() * length)+from;
    msg("选取一个随机元素"+soldier+"做哨兵");
    swap(arr, from, soldier);

    var step = from;
    for(var i = from+1; i< to; i++){
        compare(i, from);
        if(arr[i] < arr[from]){
            swap(arr, ++step, i);
        }
    }
    swap(arr, from, step);

    if(step+1 == n){
        var result = arr[step];
        msg("哨兵的位置即是所需的位置，得出结果，中位数为"+result);
        start_animate(step);
        return result;
    }
    if(n > step+1){
        msg("所需要的元素比哨兵大，因此在哨兵的右侧");
        return getIndex(arr, n, step+1, n+1);
    }else{
        msg("所需要的元素比哨兵小，因此在哨兵的左侧");
        return getIndex(arr, n, from, step);
    }}

function swap(arr, from, to){
    var temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
    swapGraph(from, to);
}


