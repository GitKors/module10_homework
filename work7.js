let arr = [194, 888, null, undefined, 0, "student", 195, 889, "notebook", "Alex", "FrontEnd", null, "Fronfend"];

let zeros=0;
let strs=0;
let countables=0;
let uncountables=0;
let nulls=0;

for (i = 0; i<arr.length; i++) {
        if (typeof arr[i] == 'string') {
        strs++;
    } else if (arr[i]==null){
        nulls++;
    } else if (arr[i]==0) {
        zeros++;
    } else if (arr[i] % 2 === 0) {
        countables++;
    } else {
        uncountables++;
    }   
}
alert(`В массиве: \n Нулей - ${zeros} \n Строк - ${strs} \n Нуллов - ${nulls} \n Четных - ${countables} \n Нечетных - ${uncountables}`)