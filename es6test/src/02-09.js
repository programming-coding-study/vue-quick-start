var obj = { result: 0 };
obj.add = function(x, y) {
    this.result = x+y;
}
obj.add(3,4); // add 메서드 호출 => add를 보유한 객체: obj => obj의 this.result = x+y
console.log(obj) // 