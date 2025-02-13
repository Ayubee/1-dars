// Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.

// const obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
// const obj2 = {};

// for (let key in obj) {
//   if (obj2[obj[key]]) {
//     obj2[obj[key]].push(key);
//   } else {
//     obj2[obj[key]] = [key];
//   }
// }

// console.log(obj2);

// Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.

// const obj1 = { a: 3, b: 10, c: 5, d: 7 };
// const obj2 = { a: 10, d: 4, e: 6, f: 15 };
// const keys1 = Object.keys(obj1);
// const keys2 = Object.keys(obj2);
// const result = {};

// for (let i = 0; i < keys1.length; i++) {
//   if (!keys2.includes(keys1[i])) {
//     result[keys1[i]] = obj1[keys1[i]];
//   }
//   if (!keys1.includes(keys2[i])) {
//     result[keys2[i]] = obj2[keys2[i]];
//   }
// }

// console.log(result);

// Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

// const names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// const namesObj = {};

// for (let name of names) {
//   namesObj[name] = name.length;
// }

// console.log(namesObj);

// Object kalitlarining barchasi string toifasidagi ma’lumotlardan tuzilgan bo’lsa true, aks holda false qiymat qaytaruvchi defineObject nomli funksiya hosil qiling. (Object.keys())

// const obj = { abc: 1, 123: 2, d: 5 };

// function defineObj(obj) {
//   return Object.keys(obj).every((key) => {
//     return !Number(key);
//   });
// }
// const result = defineObj(obj);

// console.log(result);

// Agar object qiymatlari ichida falsy qiymatlar bo’lsa, ularni o’chirib yangi object hosil qiling. (Object.keys())

// const obj = { a: false, b: 12, c: true, d: 0 };
// const newObj = {};
// const keys = Object.keys(obj);
// for (let key of keys) {
//   if (Boolean(obj[key])) {
//     newObj[key] = obj[key];
//   }
// }

// console.log(newObj);

// Bir necha takrorlanuvchi sonlar ishtirok etgan massivdan shunday obyekt hosil qilingki, bu object kalitlari massivning takrorlanmas sonlaridan, qiymatlari esa o’sha sonlarning massivda necha marta ishtirok etganidan tuzilgan bo’lsin. (for)

// const numbers = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// const obj = {};
// for (let number of numbers) {
//   if (obj[number]) {
//     obj[number] += 1;
//   } else {
//     obj[number] = 1;
//   }
// }

// console.log(obj);

// Uzun sondan shunday obyekt hosil qilingki, bunda object kalitlari sinflardan, qiymatlari esa o’sha sonning mos ravishdagi o’sha sinfdagi qiymatlaridan tuzilgan bo’lsin. (for, slice)

// let number = 8945472985629;
// let formats = new Intl.NumberFormat("en-US")
//   .format(number)
//   .split(",")
//   .reverse();

// let numberName = [
//   "birlar",
//   "minglar",
//   "millionlar",
//   "milliardlar",
//   "trilionlar",
// ];
// let obj = {};

// for (let i = 0; i < numberName.length; i++) {
//   obj[numberName[i]] = formats[i];
// }

// console.log(obj);
