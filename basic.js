// to read the data
function traverser() {
    const numArray =[12,13,14,14]
    console.log(numArray);
    document.write(numArray[2]);
}
// call the function
// traverser();

// Insterstion 
function instersion() {
    let intArray = [12,39,"apple",60];
    console.log(intArray);
    intArray[2]=7;
    console.log(intArray);     
}
    
// instersion();

// function insterrrrrr() {
//     let array2 = [1,3,4,"ookk"];
//     console.log(array2);
//     array2[3] = 9;
//     console.log(array2);
// }

// insterrrrrr();

// print all the values of the array 
// let array=[1,2,3,4,5,6,7,8,9,10];
// for (let i=0 ;i < array.length;i++){
//     document.write(array[i])
// }  





//inster into empty 

function emptyArray (){
    let arr1 = [];
    arr1[arr1.length] = 10;
    // arr1=10;
    console.log(arr1)
    document.write(arr1);


    // a = ["1", 2, "A", "A23", "B", "20", 12];

    // a.map((x) => {
    //     if (x == parseInt(x)) {
    //         console.log(x)
    //     }
    // });
}

// emptyArray();



function startArray() {
    let arr2 = [1,2,3];
    let arr3=5;
//    for (let i =2 ; i >=0 ; i--){
    // arr2=arr2[i+1]
    arr2[3]=arr3;
//    }
   console.log(arr2)
  
    
    
    
    
}

// startArray();

// let arr2=[1,2,3];
// arr2 = [5,...arr2]
// console.log(arr2);


// let arr2 = [1,2,3];
// arr2=[...
    
//     arr2,5];

// console.log(arr2);


// delete the empty error 


function emptyArray (){
    let array =[]

   if (array.length === 0){
        console.log("cannot delete the empty array");
    }
}

// emptyArray();



// delete the only element from the array 


function onlyArray (){
    let array4=[10];
    for (let i = 0; i < array4.length - 1; i--) {
        array4[i+1] = array4[i]
        console.log(array4 [i+1]);

    }
   array4.length=array4.length-1;
    // Reduce the array length
    console.log(array4); // Output: []
}
// onlyArray();



// delete the first element 


// function deletefirst (){
//     let array5 =[1,2,3,4];
//       for (let i=0 ; i < array5.length-1 ; i++){
//         array5[i]=array5[i+1]

//       }
//       array5.length = array5.length - 1;
//       console.log(array5);
// };
// deletefirst();



function deletelast (){
    let array6 =[1,2,3,4]
      array6.length=array6.length-1
      console.log(array6);
}
// deletelast();


function shiftLeft () {
    let array7 =[1,2,3,4,5]
     x= array7[0]
    for (let i=0 ; i < array7.length ; i++){
        array7[i]=array7[i+1]
    }
    
    array7[4]=x;
    console.log(array7);
}
// shiftLeft();




function shiftRight () {
    let array7 =[1,2,3,4,5]
     x= array7[4]
     console.log(x)
    //  array7.length=array7.length-1
    for (let i=4 ; i >= 0; i--){
        // array7[i+1]=arr
        // ay7[i]
        array7[i]=array7[i-1]
    }
    // array7.length=array7.length-1
    array7[0]=x;    
    console.log(array7);
}
// shiftRight();

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums,target) {


    for(let i = 0 ; i < nums.length; i++ ){
        for(let j =i+1 ; j < nums.length; j++ ){ 
            if (nums[i] + nums[j] == target){
               return([i,j]);
            }
        }
    }

    
}
let nums = [3,1,3] 
let target = 6

// console.log(twoSum(nums,target));


// var  mergeTwoArray= function( data1,data2) {
//     if(!data1) return data2;
//     if (!data2) return data1;

//     let data3=[];
        
//     for(let i = 0 ; i <data1.length; i++){
//         data3[i]=data1[i]
//     }

//     for (i=0 ; i <data2.length;i++){
//         data3[data1.length+i]=data2[i]
//     }

//     // console.log(data3);
//     return data3;
    
// }

// var mergeUsingSpread =function(data1,data2){
//     if (!data1) return data2
//     if (!data2) return data1
//      return [...data1,...data2]
// }


// var pushTwoArray =function(data1,data2) {
//     if (!data1) return data2;
//     if (!data2) return data1;
    
//     let data3 =[];
//     data3.push(data1);
//     data3.push(...data2);
//     return data3;
    
    
// }
// let data1=[8,9,10,11];
// let data2=[1,2,3];
// mergeTwoArray(data1,data2);
// console.log(mergeUsingSpread(data1,data2));
// console.log(pushTwoArray(data1,data2));



// Insert 50 at index two 


var addIndex = function(array, index, number) {
    for (let i = array.length-1 ; i >= index; i--) {
         array[i+1] = array[i]
       
    }
    array[index] = number; // Insert the number at the desired index
    console.log(array); // Log the final array
};

let number = 50;
let index = 2;
let array = [10, 13, 8, 0];
// addIndex(array, index, number);

// remove duplicate ,delete all this can work in one function
var deleteElement= function(num,targets) {

 let count =0
    for(let i = 0 ; i < num.length; i++){
       if(num[i] != targets){
        num[count] = num[i];
        count++
       }
    }
    num.length = count;
    return { count: count, newArray: num };

}
// let num = [1,5,6,2,3];
// let targets =2;
// let result=deleteElement(num,targets);

// console.log(result.count);    // Output: 4
// console.log(result.newArray); // Output: [1, 5, 6, 3]


var swapNumber = function(number1,el1,el2) {
    let firstIndex;
    let secondIndex;
    let tmp;

    for (let i =0 ; i < number1.length ; i++){
        if (number1[i] == el1){
            firstIndex = i;
            
        }
        else if(number1[i] == el2){
            secondIndex = i;
        }
    }

    tmp = number1[firstIndex];
    number1[firstIndex] = number1[secondIndex];
    number1[secondIndex] = tmp;
    return number1;
}
let number1 =[3,8,10,13,18];
let el1=10;
let el2=13;
// console.log(swapNumber(number1,el1,el2));

// merge two array in new 


var mergeArray = function (a1,a2) {
   let a3 = [];
    for (let i =0 ; i < a1.length ;i++){
        a3[i]=a1[i];
    }
    for(i=0 ; i < a2.length ; i++){
        a3[a1.length+i]=a2[i]
    }
    console.log(a3);
    return [a3]

}
let a1=[10,20,30];
let a2=[1,50,2,3]
// mergeArray(a1,a2)


var sortArray = function(sorta1) {
   
    let tmp;
    for( let i = 0 ; i < sorta1.length; i ++){

        if (sorta1[i] > sorta1[i+1]){
            tmp=sorta1[i];
            sorta1[i]=sorta1[i+1];
            sorta1[i+1]=tmp
        } 
    }

    console.log(sorta1);
    return sorta1;

}
// sorta1 = [1,5,2,10,9]
// sortArray(sorta1)

var sortArrayDesc = function(sorta2) {

    let tmp;
    for( let i = 0; i < sorta2.length; i++){
        for(let j = i + 1; j < sorta2.length; j++) {

            if (sorta2[j] > sorta2[i]) {
                tmp = sorta2[j];
                sorta2[j] = sorta2[i];
                sorta2[i] = tmp;
            }

            console.log("sorta2", sorta2)

        }
    }

    // console.log(sorta2);
    return sorta2;

}
let sorta2 = [1,5,2,10,9]
// sortArrayDesc(sorta2)

// console.log(sortArrayDesc(sorta2));


// move zeros to the end of the arary 

var moveZeros = function(mArray) {
    let j = 0;
    let tmp;
    for (let i = 0 ; i < mArray.length ; i++){
        if (mArray[i] != targetValue){
            // console.log(mArray[i]);s
            tmp = mArray[i];
            mArray[i] = mArray[j];
            mArray[j] = tmp
            j++;
            // console.log(mArray[j]);
        }
    }
   console.log(mArray);
   return mArray;
}
let mArray=[1,0,3,0];
let targetValue=0
// moveZeros(mArray,target);


var addAtfirstpostion = function(array3,value) {

    for(let i = array3.length-1 ; i >= 0 ; i--){
        array3[i+1]=array3[i];

    }
    array3[0]=value;
    console.log(array3);
    return array3;





}
let array3=[1,2,3,4];
let value = 0;
// addAtfirstpostion(array3,value)


var addAtlast = function(array4,values) {


  array4[array4.length]=values;
  console.log(array4);
  return array4;




}
let array4=[1,2,3,4];
let values = 0;
// addAtlast(array4,values)


// reverse the array


var ReverseArray = function(array6) {
    let j =array6.length-1;
    for (let i =0 ; i < Math.floor(j/2); i++){
            tmp = array6[i];
            array6[i]=array6[j-i];
            array6[j-i]=tmp;
        
        }
        console.log(array6);
        return (array6);
    

}
let array6=[1,2,3,4,5];
// ReverseArray(array6);



var moveNegativeLeft = function(array7) {
    let j = 0;
    let tmp;
    for (let i = 0; i < array7.length-1; i++) { // Fixed the loop condition
        if (array7[i] < 0) {
            tmp = array7[j];
            array7[j] = array7[i];
            array7[i] = tmp;
            j++;
        }
    }
    console.log(array7); // Moved inside the loop to show step-by-step changes
    return array7;
 };
 
 let array7 = [1, 2, 3, -1, -1, 1];
 moveNegativeLeft(array7); // Call the function with the input array
 


