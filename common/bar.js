function BarAnimate(){

}
BarAnimate.prototype = {};
BarAnimate.prototype.dataarr = [];
BarAnimate.prototype.dataGraph = [];
BarAnimate.prototype.queue = new AnimateQueue();
BarAnimate.prototype.go = function(){
    this.queue = new AnimateQueue();
    $(".graph").text("");
    var data = $("#data").val();
    this.dataarr = data.split(",");
    for(var i = 0; i<this.dataarr.length; i++){
        var ele = this.createElement(dataarr[i]);
        this.dataGraph.push(ele);
        $(".graph").append(ele);
    }

    var middle = parseInt((dataarr.length+2-1)/2);
    msg("中位数为第"+middle+"元素");
    getIndex(dataarr, middle, 0, dataarr.length);
}

/**
 * 交换量元素
 * @param from
 * @param to
 */
BarAnimate.prototype.swapGraph = function(from, to){
    this.queue.add(function(){
        var fromGraph = dataGraph[from];
        var toGraph = dataGraph[to];

        this.change(fromGraph, "red");
        this.change(toGraph, "red");

        setTimeout(function(){
            doswapGraph(fromGraph, toGraph);
            change(fromGraph, "blue");
            change(toGraph, "blue");
        }, 1000)
    }, 2000)
}