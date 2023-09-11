// This is the keyword used to reference the object that is executed in the current running function.

function test() 
{
 console.log(this) //refers to the object that is calling test
}

test(); //the function being called. Test is being called from the global scope. The object that is calling it is technically the window object since window is on the top level.