var numbers = [];

function generateNumbers() {
  for (var i = 0; i < 15; i ++) {
    numbers.push(Math.floor(Math.random() * 100));
  }
}

function showNumbers(element) {
  var ul = document.getElementById(element);
  for (var i = 0; i < 15; i ++) {
    ul.innerHTML += "<li>" + numbers[i] + "</li>";
  }
}
var numbers =[61,3,88.40,32,2,54,45,10,84,68,94,11,1,94];
function popSort(arr) {
    var len = arr.length;
    for(var i=0;i <len-1;i++){
        for(var j = i+1;j <len;j++){
            if(arr[i]>arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] =temp
            }
        }
    }
    return arr;
  // 请与此函数内实现对numbers数组的升序冒泡排序


    console.log(popSort(arr))
}

generateNumbers(); 
showNumbers('randomArray');
popSort(numbers);
showNumbers('sortedArray');