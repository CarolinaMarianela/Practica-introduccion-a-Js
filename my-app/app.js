import readline from 'readline/promises';

let students = [
  {
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu',
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia',
  },
  {
    age: 23,
    examScores: [],
    gender: 'female',
    name: 'maría',
  },
  {
    age: 27,
    examScores: [],
    gender: 'male',
    name: 'pedro',
  },
  {
    age: 24,
    examScores: [],
    gender: 'female',
    name: 'ana',
  },
];
const availableMaleNames = [
  'pepe',
  'juan',
  'victor',
  'Leo',
  'francisco',
  'carlos',
];
const availableFemaleNames = [
  'cecilia',
  'ana',
  'luisa',
  'silvia',
  'isabel',
  'virginia',
];
const availableGenders = ['male', 'female'];

//1- Mostrar en formato de tabla todos los alumnos.
function studentTable() {
  console.table(students);
}

studentTable.isPrintable = true;

// 2- Mostrar por consola la cantidad de alumnos que hay en clase.
function numberStudents() {
  return students.length;
}

// 3- Mostrar por consola todos los nombres de los alumnos.
function showStundentsNames() {
  return students.map((student) => student.name).join(', ');
}

//4- Eliminar el último alumno de la clase.
function deleteLastStundents() {
  return students.pop();
}

//5- Eliminar un alumno aleatoriamente de la clase.
function deleteStundentAleatory() {
  const position = Math.floor(Math.random() * students.length);
  console.log(`\nAdiós ${students[position].name} 👋 !`);
  students = students.filter((student, index) => index !== position);
}
//6- Mostrar por consola todos los datos de los alumnos que son chicas.

function femaleStudents() {
  return students.filter((element, index) => {
    return element.gender === 'female';
  });
}

//7- Mostrar por consola el número de chicos y chicas que hay en la clase.
function numberGenre() {
  const numberOfFemales = students.filter((element, index) => {
    return element.gender === 'female';
  }).length;
  const numberOfMales = students.filter((element, index) => {
    return element.gender === 'male';
  }).length;

  return { numberOfFemales, numberOfMales };
}

//8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
function allStudentsFemales() {
  return students.every((elements, index) => {
    return elements.gender.length === 'female';
  });
}

//9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
function studentsAge() {
  return students.filter((element, index) => {
    return element.age >= 20 && element.age <= 25;
  });
}

//10- Añadir un alumno nuevo con los siguientes datos:
// nombre aleatorio.
// edad aleatoria entre 20 y 50 años.
// género aleatorio.
// listado de calificaciones vacío.
function generateAlumnRandom() {
  const randomGender = Math.floor(Math.random() * availableGenders.length);
  const nameByGender =
    randomGender === 0 ? availableMaleNames : availableFemaleNames;
  const randomNameByGender = Math.floor(Math.random() * nameByGender.length);
  const randomAge = Math.floor(Math.random() * (50 - 20)) + 20;
  const studentRandom = {
    age: randomAge,
    examScores: [],
    gender: availableGenders[randomGender],
    name: nameByGender[randomNameByGender],
  };
  return studentRandom;
}
//11- Mostrar por consola el nombre de la persona más joven de la clase.
function showStundentsMinAge() {
  return students.reduce(function (prev, curr) {
    return prev.age < curr.age ? prev : curr;
  });
}

//12- Mostrar por consola la edad media de todos los alumnos de la clase.
function getAverageAge() {
  const sum = students.reduce((prev, student) => prev + student.age, 0);
  return sum / students.length;
}

//13- Mostrar por consola la edad media de las chicas de la clase.
function getAverageFemaleAge() {
  const studentsAge = students
    .filter((element, index) => {
      return element.gender === 'female';
    })
    .reduce((prev, student) => prev + student.age, 0);
  return studentsAge / students.length;
}

//14- Añadir nueva nota a los alumnos.
//Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria
//(número entre 0 y 10) y añadirla a su listado de notas.
function generateNoteRandom() {
  students.map((student) => {
    const randomNumber = Math.floor(Math.random() * 10);
    return (student.examScores = randomNumber);
  });
  return students;
}

//15- Ordenar el array de alumnos alfabéticamente según su nombre.
function alphabeticallyName() {
  return students.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const myFunctions = {
  1: studentTable,
  2: numberStudents,
  3: showStundentsNames,
  4: deleteLastStundents,
  5: deleteStundentAleatory,
  6: femaleStudents,
  7: numberGenre,
  8: allStudentsFemales,
  9: studentsAge,
  10: generateAlumnRandom,
  11: showStundentsMinAge,
  12: getAverageAge,
  13: getAverageFemaleAge,
  14: generateNoteRandom,
  15: alphabeticallyName,
};

function showMenu() {
  console.log('\nLista de Estudiantes:');
  console.log(`\n[ ${showStundentsNames()} ]`);
  console.log('\nSelecciona una opcion:');
  console.log(`
1- Ver formato de tabla todos los alumnos.
2- Ver la cantidad de alumnos que hay en clase.
3- Ver todos los nombres de los alumnos.
4- Eliminar el último alumno de la clase.
5- Eliminar un alumno aleatoriamente.
6- Ver todos los datos de los alumnos que son chicas.
7- Ver el número de chicos y chicas que hay en la clase.
8- Mostrar true o false si todos los alumnos de la clase son chicas.
9- Conocer los nombres de los alumnos que tengan entre 20 y 25 años.
10- Añadir un alumno nuevo aleatorio.
11- Saber el nombre de la persona más joven de la clase.
12- Conocer la edad media de todos los alumnos de la clase.
13- Conocer la edad media de las chicas de la clase.
14- Añadir nueva nota a los alumnos.
15- Ordenar alfabéticamente los alumnos según sus nombres.
`);
}

/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/
/****************************************************/

async function printOptions() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const chooseSize = Object.keys(myFunctions).length;

  let choose = -1;

  while (choose < 1 || choose > chooseSize) {
    showMenu();
    choose = await rl.question('Qué hacer?: ');
    choose = choose === '' ? -1 : Number(choose);
  }

  rl.close();

  return choose;
}

async function main() {
  while (true) {
    const choose = await printOptions();
    const functionSelected = myFunctions[choose];

    if (functionSelected.isPrintable) {
      functionSelected();
    } else {
      const result = functionSelected();
      if (result !== undefined) {
        console.log();
        console.log(result);
      }
    }

    console.log('\n----------------\n');
  }
}

main();
