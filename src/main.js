class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const students = [
  new Student('Alvin', 20),
  new Student('Bob', 21),
  new Student('Clara', 20),
];

}

function getAverageAge(students) {
  const totalAge = students.reduce(calculateAverageAge, 0);
  return totalAge / students.length;
}

document.getElementById('getAverageButton').addEventListener('click', () => {
  document.getElementById('averageText').innerHTML = getAverageAge(students);
});

