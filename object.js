const A = {
    name: "chu_hong_kyu",
    like: "css",
    age: "92"
}


console.log(A);

const B = Object.assign({cm : "182"}, A);

console.log(B);

const C = Object.keys(B);

console.log(C);

const D = Object.values(B);

console.log(D);

const E = Object.entries(B);

console.log(E);

const F = Object.fromEntries(E);

console.log(F);
