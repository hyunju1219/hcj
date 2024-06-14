var num = 10;
var sNum = "10";
console.log(num === sNum);
var num2;
console.log(!!num2);
/*
    !(not) 연산자를 활용하여 문자, 숫자등의 자료를 논리데이터로 변환
    var num = 10;
    !!num => true
    num = 0;
    !!num => false

    var str ="test";
    !!str => true
    str = "";
    !!str =>false

    var array = [1, 2, 3];
    !!array => true
    array = [];
    !!array => true
    !!array.length => false
    array.length === 0 -> false
    빈배열의 경우 길이로 확인
*/
var num = 0;
console.log(!!num);
var str = " "; //""  or " " 공백도 빈값
console.log(!!str);
var array = [];
console.log(!!array);
console.log(!!array.length);
var a;
console.log(!!a);
var b = null;
console.log(!!b);
var c = 0 / 0; //NaN 계산 불가
console.log(!!c)

if(num === 0) {
    console.log("num은 0입니다.")
}

if(!num) {
    var num2 = 20;
    console.log("num은 0입니다.!")
    if(!!num2) {
        console.log("num2는 값이 있습니다.")
    }
}

if(!str) {
    console.log("빈 문자열입니다.")
}

if(!b) {
    console.log("null입니다.")
}