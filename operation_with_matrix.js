
function getRows(matrix)
{
    const rows = [];
    const rowCount = matrix.length;
    const colCount = matrix[0].length;


    for(var i = 0;i<rowCount;i++)
    {
        rows[i]= []
     for(var j = 0;j<colCount;j++)
     {
      rows[i].push(matrix[i][j])
     }
    }


     return rows;
} 

function flat(matrix)
{
   const arr=[];

   const rowCount = matrix.length;
  
   for(var i = 0;i<rowCount;i++)
   {
      for(var j = 0;j<matrix[i].length;j++)
      {
           arr.push(matrix[i][j]);
      }

   }

   

   return arr;
}

function getCols(matrix)
{
    const column=[];

    const rowCount = matrix.length;
    const colCount = matrix[0].length;
 
    for(var i = 0;i<rowCount;i++)
    {
        column[i]=[];
       for(var j = 0;j<colCount;j++)
       {
          
           column[i].push(matrix[j][i])
           
       }
 
    }

    return column
}

const matrix  = [[1,2,3],[4,5,6],[7,8,9]];



const rows = [getRows(matrix)];
const cols = [getCols(matrix)];
const array = [flat(matrix)];

console.log(cols);
console.log(rows);
console.log(array);