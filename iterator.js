function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }

function foo(obj)
{
    var keys = [];
    var index = 0;
  
     for(let key in obj)
     {
        if(!isLetter(key))
         keys.push(key);
         
     }
    
    return keys;
}

function* foo1(obj)
{
    //var keys = [];
    var index = 0;
    while(index<=Object.keys(obj).length)
    {
     for(let key in obj)
     {
        if(!isLetter(key))
        {
        //keys.push(key);
         index++
         yield key
        }
     }
    }
    return keys;
}

const o = {a: 1, 2: 3, b: 4, 5: 6, c: 7,6:8};

var iterator = foo1(o);

var keys = [foo(o)];

 
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
