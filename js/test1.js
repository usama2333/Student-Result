// document.getElementById('h11').innerHTML = 'Test Array';

var min = 3333333333;
var secondMin = 333333333;
var thirdMin = 3333333333;
var fourthMin = 3333333333;

var max = 0;
var secondMax = 0;
var thirdMax = 0;
var fourthMax = 0;

var counter1 = 0;
var counter2 = 0;


var newArray = [];

var student =  [

    {
        id : 1,
        name : 'Student1',
        obMarks : 700,
        tMarks : 1100,
        status : 'pass'
    },

    {
        id : 2,
        name : 'Student2',
        obMarks : 995,
        tMarks : 1100,
        status : 'fail'
    },

    {
        id : 3,
        name : 'Student3',
        obMarks : 555,
        tMarks : 1100,
        status : 'fail'
    },

    {
        id : 4,
        name : 'Student4',
        obMarks : 401,
        tMarks : 1100,
        status : 'pass'
    },

    {
        id : 5,
        name : 'Student5',
        obMarks : 855,
        tMarks : 1100,
        status : 'pass'
    },
    {
        id : 6,
        name : 'Student6',
        obMarks : 235,
        tMarks : 1100,
        status : 'pass'
    },

    {
        id : 7,
        name : 'Student7',
        obMarks : 400,
        tMarks : 1100,
        status : 'fail'
    },
    {
        id : 8,
        name : 'Student8',
        obMarks : 832,
        tMarks : 1100,
        status : 'pass'
    },
    {
        id : 9,
        name : 'Student9',
        obMarks : 999,
        tMarks : 1100,
        status : 'pass'
    },
    {
        id : 10,
        name : 'Student10',
        obMarks : 132,
        tMarks : 1100,
        status : 'fail'
    },
    {
        id : 11,
        name : 'Student11',
        obMarks : 336,
        tMarks : 1100,
        status : 'fail'
    }

];



console.log(student);

// function findMinMax (student) {

//     var array = student.map((value) => {
     
//         return value.obMarks;
//     });
//     // console.log('This is test 2 statement');
//     // console.log(array);
    
    
//     // console.log('The maximum numbers are');
  
   
    
  
    
//      for (let i = 0; i < array.length; i++) {
         
//          if(array[i] > max) {
//             fourthMax = thirdMax;
//              thirdMax= secondMax;
//              secondMax = max;
//              max = array[i];
//          }
//          else if (array[i] > secondMax && array[i] < max) {
//              secondMax = array[i];
//          }
//          else if (array[i] > thirdMax && array[i] < secondMax) {
//              thirdMax = array[i];
//          }
//          else if (array[i] > fourthMax && array[i] < thirdMax) {
//             fourthMax = array[i];
//         }
//      }
     
//      console.log('Finding Max numbers');

//      console.log(max);
//      console.log(secondMax);
//      console.log(thirdMax);
//      console.log(fourthMax);
    
    
    
//     //  console.log('The minimum numbers are');
  
    
   
    
//      for (let i = 0; i < array.length; i++) {
         
//          if(array[i] < min) {
//             fourthMin = thirdMin;
//             thirdMin= secondMin;
//              secondMin = min;
//              min = array[i];
//          }
//          else if (array[i] < secondMin && array[i] > min) {
//             secondMin = array[i];
//          }
//          else if (array[i] < thirdMin && array[i] > secondMin) {
//             thirdMin = array[i];
//          }
//          else if (array[i] < fourthMin && array[i] > thirdMax) {
//             fourthMin = array[i];
//         }
//      }
     
//      console.log('Finding Minimum numbers');

//      console.log(min);
//      console.log(secondMin);
//      console.log(thirdMin);
//      console.log(fourthMin);

// }



// findMinMax(student);



   function checkData (student) {
        console.log('Check Data');
     
        // for(let x in student) {
        //  console.log(student[x].obMarks);

        //  if(student[x].obMarks === max || student[x].obMarks || secondMax || student[x].obMarks || thirdMax){
        //    console.log(student[x].status = 'Top Achievers'); 

        //  }else if(student[x].obMarks === min || student[x].obMarks || secondMin || student[x].obMarks || thirdMin) {
        //     console.log(student[x].status = 'Fail');
        //  }
         
        // }

        newArray = student.filter((value) => {
                // console.log(value.obMarks === max);
                if((value.obMarks > 800 && value.obMarks <= 1100) && value.status === 'pass' ){
                       counter1 += 1;
                       if(counter1 <= 3) {
                        value.status = 'Top Achievers';
                        return value; 
                       }
                       else{
                        value.status = 'Pass';
                        return value;
                       }
                    
            
                    }else if((value.obMarks >= 0  && value.obMarks <= 500) && value.status === 'fail' ) {
                        // counter2 += 1;
                        // if(counter2 <= 3) {
                        //     value.status = 'Fail';
                        //     return value; 
                        //    }
                        //    else{
                        //     value.status = 'Pass';
                        //     return value;
                        //    }
                        value.status = 'Fail';
                        return value;
                 }
                 else {
                    value.status = 'Pass';
                    return value;
                 }
        });

        console.log('new Array');
        console.log(newArray);

        onLoadData(newArray);
     
     }

    //  checkData(student);




function onLoadData(newArray) {
    document.getElementById('pass').innerHTML = createTable(newArray);
    console.log('This is new array');
    console.log(newArray);
 }

 function oldData(student) {
    document.getElementById('body').innerHTML = createTable(student);
    console.log('This is old array');
    console.log(student);
 }
 
 
 function createTable(student) {
     var row = "<tr>";
 
     student.forEach((value) => {
         
 
         row += `<td> ${value.id} </td>`;
         row += `<td> ${value.name} </td>`;
         row += `<td> ${value.obMarks} </td>`;
         row += `<td> ${value.tMarks} </td>`;
         row += `<td> ${value.status} </td> </tr>`;
         
 
     });
 
     return row;
 }

