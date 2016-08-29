var intersection = function(arr1,arr2){
  var output = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]){
        output.push(arr1[i]);
      }
    }
  }
  return output;
};

var arr1=[1,2,3,8,12];
var arr2=[1,3,5,8,20];

console.log(intersection(arr1,arr2));
