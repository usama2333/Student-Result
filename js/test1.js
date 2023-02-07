// document.getElementById('h11').innerHTML = 'Test Array';

var min = 3333333333;
var secondMin = 333333333;
var thirdMin = 3333333333;
var max = 0;
var secondMax = 0;
var thirdMax = 0;


var newArray = [];

var student =  [

    {
        id : 1,
        name : 'Name1',
        obMarks : 700,
        tMarks : 1100,
        status : 'pass'
    },

    {
        id : 2,
        name : 'Name2',
        obMarks : 600,
        tMarks : 1100,
        status : 'pass'
    },

    {
        id : 3,
        name : 'Name3',
        obMarks : 555,
        tMarks : 1100,
        status : 'pass'
    },

    {
        id : 4,
        name : 'Name4',
        obMarks : 455,
        tMarks : 1100,
        status : 'pass'
    },

    {
        id : 5,
        name : 'Name5',
        obMarks : 855,
        tMarks : 1100,
        status : 'pass'
    },
    {
        id : 6,
        name : 'Name6',
        obMarks : 355,
        tMarks : 1100,
        status : 'pass'
    },

    {
        id : 7,
        name : 'Name7',
        obMarks : 975,
        tMarks : 1100,
        status : 'pass'
    },
    {
        id : 8,
        name : 'Name8',
        obMarks : 232,
        tMarks : 1100,
        status : 'pass'
    },
    {
        id : 9,
        name : 'Name9',
        obMarks : 999,
        tMarks : 1100,
        status : 'pass'
    },
    {
        id : 10,
        name : 'Name10',
        obMarks : 132,
        tMarks : 1100,
        status : 'pass'
    },
    {
        id : 11,
        name : 'Name11',
        obMarks : 336,
        tMarks : 1100,
        status : 'pass'
    }

];



console.log(student);

function findMinMax (student) {

    var array = student.map((value) => {
     
        return value.obMarks;
    });
    // console.log('This is test 2 statement');
    // console.log(array);
    
    
    // console.log('The maximum numbers are');
  
   
    
  
    
     for (let i = 0; i < array.length; i++) {
         
         if(array[i] > max) {
             thirdMax= secondMax;
             secondMax = max;
             max = array[i];
         }
         else if (array[i] > secondMax && array[i] < max) {
             secondMax = array[i];
         }
         else if (array[i] > thirdMax && array[i] < secondMax) {
             thirdMax = array[i];
         }
     }
     
     console.log(max);
     console.log(secondMax);
     console.log(thirdMax);
    
    
    
    //  console.log('The minimum numbers are');
  
    
   
    
     for (let i = 0; i < array.length; i++) {
         
         if(array[i] < min) {
            thirdMin= secondMin;
             secondMin = min;
             min = array[i];
         }
         else if (array[i] < secondMin && array[i] > min) {
            secondMin = array[i];
         }
         else if (array[i] < thirdMin && array[i] > secondMin) {
            thirdMin = array[i];
         }
     }
     
     console.log(min);
     console.log(secondMin);
     console.log(thirdMin);

}



findMinMax(student);



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
                if(value.obMarks === max || value.obMarks === secondMax || value.obMarks === thirdMax){
                       value.status = 'Top Achievers';
                       return value; 
            
                    }else if(value.obMarks === min || value.obMarks === secondMin || value.obMarks === thirdMin) {
                        value.status = 'Fail';
                       return value;
                 }
                 else {
                    return value;
                 }
        });

        console.log('new Array');
        console.log(newArray);

        // onLoadData(newArray);
     
     
     }

     checkData(student);




function onLoadData(newArray) {
    document.getElementById('body').innerHTML = createTable(newArray);
 }

//  function onLoadDataOld(student) {
//     document.getElementById('body').innerHTML = createTable(student);
//  }
 
 
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

