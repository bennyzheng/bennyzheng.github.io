// 执行99999999次的取模
var time = 99999999;

// 不使用try-catch
function test1() {
    var value = 0;
    var obj = {};
    console.time("test1");

    for (var i = 0; i < time; i++) {
        value = i % 5;
    }

    console.timeEnd("test1");
}

// try-catch内部有无费时代码时性能区别
// 直接将费时代码放在try-catch中
function test2() {
    var value = 0;
    var obj = {};
    console.time("test2");

    try {
        for (var i = 0; i < time; i++) {
            value = i % 5;
        }
    }catch(ex){}

    console.timeEnd("test2");
}

// try-catch内部有无费时代码时性能区别
// 将费时代码放入内置函数中
function test3() {
    var value = 0;
    var obj = {};
    console.time("test3");

    try {
        (function() {
            for (var i = 0; i < time; i++) {
                value = i % 5;
            }

            obj.value = value;
        })();
    }catch(ex){}

    console.timeEnd("test3");
}

// try-catch内部有无费时代码时性能区别
// 将费时代码放到外部函数中进行调用
function test4() {
    var value = 0;
    var obj = {};
    console.time("test4");

    function fn() {
        for (var i = 0; i < time; i++) {
            value = i % 5;
        }

        obj.value = value;
    }

    try {
        fn();
    }catch(ex){}

    console.timeEnd("test4");
}

// try-catch内部是否引用外部变量时性能区别
// 引用外部变量
function test5() {
    var value = 0;
    var obj = {};
    console.time("test5");

    for (var i = 0; i < time; i++) {
        value = i % 5;
    }

    try {
        obj.value = value;
    }catch(ex){}

    console.timeEnd("test5");
}

// try-catch内部是否引用外部变量时性能区别
// 不引用外部变量
// 以及
// try-catch是否放在子作用域时性能区别
// 不放在子作用域
function test6() {
    var value = 0;
    var obj = {};
    console.time("test6");

    for (var i = 0; i < time; i++) {
        value = i % 5;
    }

    obj.value = value;

    try {
    }catch(ex){}

    console.timeEnd("test6");
}

// try-catch是否放在子作用域时性能区别
// 放在子作用域
function test7() {
    var value = 0;
    var obj = {};
    console.time("test7");

    for (var i = 0; i < time; i++) {
        value = i % 5;
    }

    obj.value = value;

    (function() {
        try {
        }catch(ex){}
    })();

    console.timeEnd("test7");
}

// try-catch是否放在子作用域时性能区别
// 放在子作用域
function test8() {
    var value = 0;
    var obj = {};
    console.time("test8");

    for (var i = 0; i < time; i++) {
        value = i % 5;
    }

    (function() {
        try {
            obj.value = value;
        }catch(ex){}
    })();

    console.timeEnd("test8");
}

// 相比test7少了一个obj.value = value;
function test9() {
    var value = 0;
    var obj = {};
    console.time("test9");

    for (var i = 0; i < time; i++) {
        value = i % 5;
    }

    (function() {
        try {
        }catch(ex){}
    })();

    console.timeEnd("test9");
}


test1();
test2();
test3();
test4();
test5();
test6();
test7();
test8();
test9();