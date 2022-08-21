// program to find fibonacci series

let a = 0;
let b = 1;
let ans;

console.log(a);
console.log(b);

for (i = 0; i < 10; i++) {
  ans = a + b;
  console.log(ans);
  a = b;
  b = ans;
}
