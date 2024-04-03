// ! Task-1: Verilmiş ədədin 3-ün qüvvəti olub, olmadığını tapan alqoritm yazın.

// let eded = parseInt(prompt("Ədədi daxil edin:"));
// let kontrolEded = eded

// // Ədədin qüvvəti 0-sa, 1-dir ve 3-ün qüvvətidir.
// if (kontrolEded === 1) {
//     console.log(eded + " 3'ün Qüvvətidir.");
// } else {
//     // Ədəd 0 və ya mənfi olarsa 3-ün qüvvəti deyil.
//     if (kontrolEded <= 0) {
//         console.log(eded + " 3'ün qüvvəti deyil.");
//     } else {
//         // Ədədin 3-ün qüvvəti olub olmadığını yoxlamaq üçün
//         // 3-ü böldüyümüzdə qalıq olmamalıdır.
//         while (kontrolEded % 3 === 0) {
//             kontrolEded /= 3;
//         }

//         // Kontrol eded sonda 1-ə bərabərdirsə, 3-ün qüvvətidir.
//         if (kontrolEded === 1) {
//             console.log(eded + " 3'ün qüvvətidir.");
//         } else {
//             console.log(eded + " 3'ün qüvvəti deyil.");
//         }
//     }
// }


// !  Task-2: Verilmiş ədədin Polidrom olub olmadığını yoxlayan alqoritm yazın.

// const eded = parseInt(prompt("Ədədi daxil edin:"));
// const ededString = eded.toString();
// let polidrom = true;

// for ( i = 0; i < ededString.length / 2; i++) {
//     if (ededString[i] !== ededString[ededString.length - 1 - i]) {
//         polidrom = false;
//         break;
//     }
// }

// if (polidrom) {
//     console.log(eded + " bu ədəd polidromdur.");
// } else {
//     console.log(eded + " bu ədəd polidrom deyil.");
// }


// ! Task-3: Verilmiş ədədin ən yaxın aşağı kökaltı dəyərini tapan alqoritm 
// ! (misalcun ədəd 20-dirsə 4 qaytarmalıdı, 25-disə 5 qaytarmalıdı, 16-dırsa 4 vəs s.)

// let a = parseInt(prompt( 'Ədəd daxil edin:' ));
// let x,x1 = a / 2;
        
// do {
//     x = x1;
//     x1 = (x + (a / x)) / 2;
// } while (x !== x1);

// console.log(x);

// ! Task-4: Verilmiş array-dəki rəqəmlərinin cəmi 10-dan kiçik olan ədədlərin sayını tapan alqoritm yazın.

let a = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150];
let count = 0;

for (let i = 0; i < a.length; i++) {
    let num = a[i];
    let sumOfDigits = 0;

    while (num > 0) {
        sumOfDigits += num % 10;
        num = (num / 10) | 0; 
    }

    if (sumOfDigits < 10) {
        count++;
    }
}

console.log(count);


