/**
 * Created by mario on 2016/12/5.
 * 动作队列，可以连续的执行一连串动作，可以用来制作一连串动画
 */

function EventHolder(){
    this.listeners = {};
}


EventHolder.prototype = {};
EventHolder.prototype.constructor = EventHolder;

EventHolder.prototype.bind = function(event, callback){
    this.listeners[event] = callback;
};

EventHolder.prototype.publish = function(event, attrs){
    if(this.listeners[event]){
        this.listeners[event](this, event, attrs);
    }
};

/**
 * 动作队列
 * @constructor
 */
function AnimateQueue(){
    EventHolder.apply(this, arguments);
    this.queue = [];

    this.point = 0;
    this.isStart = false;

    this.bind("next", function(obj){
        if(!obj.isStart){
            return;
        }
        if(obj.point < obj.queue.length){
            obj.queue[obj.point]();
        }else{
            obj.isStart = false;
            obj.publish("end");
        }
    });

    this.bind("start", function(obj){
        obj.isStart = true;
        obj.publish("next");
    });
}

AnimateQueue.prototype = new EventHolder();
AnimateQueue.prototype.constructor = AnimateQueue;

AnimateQueue.prototype.add = function(callback, delay){
    animateQueue = this;
    this.queue.push(function(){
        setTimeout(function(){
            callback();
            animateQueue.point++;
            animateQueue.publish("next");
        }, delay);
    });

};

AnimateQueue.prototype.start = function(){
    this.publish("start");
};