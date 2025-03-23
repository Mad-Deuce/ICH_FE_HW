// Задача 1

// Создайте класс CopyEntity. 
// У него должен быть статический метод copyObject, который бы копировал любой объект. 
// Метод copyObject принимает любой объект и возвращает его копию.


let testObj = {
    num: 10,
    str: "string",
    bool: false,
    undef: undefined,
    arr: [
        "arrStr", 2, null, true, {}
    ],
    obj: {
        subNum: 5,
        subStr: "substring"
    }
};
let testArray = [
    {
        num: 10,
        str: "string",
        bool: false,
        undef: undefined,
        arr: [
            "arrStr", 2, null, true, {}
        ],
        obj: {
            subNum: 5,
            subStr: "substring"
        }
    },
    {}
];
let testNum = 244;
let testStr = "test string";
let testNull = null;
let testUndefined = undefined;
let testBool = false;
let testNan = NaN;

class CopyEntity {

    static copyObject(obj) {
        if (!obj) return obj;
        if (typeof (obj) !== 'object') return obj;
        let res = {};
        if (Array.isArray(obj)) res = [];

        Object.keys(obj).forEach(keyItem => {
            if (typeof (obj[keyItem]) === 'object') {
                if (Array.isArray(obj)) {
                    res.push(this.copyObject(obj[keyItem]));
                } else {
                    res[keyItem] = this.copyObject(obj[keyItem]);
                }

            } else {
                res[keyItem] = obj[keyItem];
            }
        });
        return res;
    };
};

console.log('');
console.log('Testing by object');
console.log('original: ', testObj);
let clone = CopyEntity.copyObject(testObj);
console.log('clone: ', clone);
testObj.obj = {};
console.log('modified original: ', testObj);
console.log('clone: ', clone);

console.log('');
console.log('Testing by array');
console.log('original: ', testArray);
clone = CopyEntity.copyObject(testArray);
console.log('clone: ', clone);
testArray = [];
console.log('modified original: ', testArray);
console.log('clone: ', clone);

console.log('');
console.log('Testing by number');
console.log('original: ', testNum);
console.log('clone: ', CopyEntity.copyObject(testNum));

console.log('');
console.log('Testing by string');
console.log('original: ', testStr);
console.log('clone: ', CopyEntity.copyObject(testStr));

console.log('');
console.log('Testing by NULL');
console.log('original: ', testNull);
console.log('clone: ', CopyEntity.copyObject(testNull));

console.log('');
console.log('Testing by undefined');
console.log('original: ', testUndefined);
console.log('clone: ', CopyEntity.copyObject(testUndefined));

console.log('');
console.log('Testing by Boolean');
console.log('original: ', testBool);
console.log('clone: ', CopyEntity.copyObject(testBool));

console.log('');
console.log('Testing by Nan');
console.log('original: ', testNan);
console.log('clone: ', CopyEntity.copyObject(testNan));