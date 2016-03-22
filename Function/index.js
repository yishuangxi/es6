/**
 * Created by yishuangxi on 2016/3/22.
 */

function f(name="world"){
    console.log("hello, " + name);
}

f();

function f2({x, y=5}){
    console.log(x, y);
}

f2({x:'xxx', y:"yyy"});

function f3(x, y=1){
    console.log(f3.length);
}

f3();

function add(...values){
    var sum = 0;
    for(let i = 0; i < values.length; i++){
        sum+=values[i];
    }

    return sum;
}

console.log(add(1,2,3));

