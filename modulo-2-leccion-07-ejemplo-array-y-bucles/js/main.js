'use strict';

const students = [
  'Amanda Elena Padilla Santiago',
  'Ana Amaro Vázquez',
  'Ana Montiaga García',
  'Bárbara Chaves Barcellos',
  'Beatriz del Valle',
  'Eva Lorenzo Mendieta',
  'Isabel Pizarro Nogales',
  'Laura Sánchez Martín',
  'Laura Pareja Almodóvar',
  'Laura Ruiz Mazorra',
  'Luz de Belén Aguirre Morales',
  'Maria Sola Hornedo',
  'María del Mar Prieto Nieto',
  'Raquel Montilla Calvo',
  'Raquel Méndiz Mateo',
  'Samantha Cancino Cofré',
  'Sandra Cubero Rosado',
  'Sara Martin Gutierrez',
  'Sara Marín Pino',
  'Tamara Leticia Sánchez Orellana'
];

let info;
let i;

// for (const student of students) {
//   console.log(student);
//   info = 'Student' + ': ' + student;
//   console.log(info);
// }

// console.log('--------------');

// for (i = 0; i < 20; i = i + 1) {
//   info = 'Student #' + i + ': ' + students[i];
//   console.log(info);
// }
// console.log('--------------');

// for (i = students.length - 1; i >= 0; i = i - 1) {
//   info = 'Student #' + i + ': ' + students[i];
//   console.log(info);
// }
// console.log('--------------');

// for (i = 0; i < 20; i = i + 2) {
//   info = 'Student #' + i + ': ' + students[i];
//   console.log(info);
// }
// console.log('--------------');

// for (i = 10; i < 20; i = i + 1) {
//   info = 'Student #' + i + ': ' + students[i];
//   console.log(info);
// }
// console.log('--------------');

// for (i = 0; i < students.length; i = i + 1) {
//   info = 'Student #' + i + ': ' + students[i];
//   console.log(info);
// }
// console.log('--------------');

// for (let student = 0; student < students.length; student = student + 1) {
//   let words = students[student].split(' ');
//   for (let word = 0; word < words.length; word = word + 1) {
//     info = 'Word #' + word + ' of: ' + students[student] + ' is: ' + words[word];
//     console.log(info);
//   }
// }

// console.log('--------------');

const scores = [10, 15, 12, 14];
let total = 0;

for (const score of scores) {
  total = total + score;
}

let average = total / scores.length;
console.log('Average', average);

console.log('--------------');

total = 0;

for (let index = 0; index < scores.length; index++) {
  total = total + scores[index];
}

average = total / scores.length;
console.log('Average', average);
