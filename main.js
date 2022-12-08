let a = true;
let b = false;
console.log("On part du principe que: \n a = true\n b = false");
console.log(!(a && b));
console.log(!(a || b));
console.log(!a && b);
console.log(!a || b);
console.log(!b);
console.log(!b && !a);
console.log(!b || !a);
console.log(a && !b);
console.log(a || !b);

// Non( A et B )
// Non( A ou B )
// Non( A ) et B
// Non( A ) ou B
// Non( B )
// Non( B ) et Non( A )
// Non( B ) ou Non( A )
// A et Non( B )
// A ou Non( B )
