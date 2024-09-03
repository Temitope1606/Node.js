// Array of objects representing students
const students = [
  { name: "Ade", age: 18, grade: "A" },
  { name: "Tiwa", age: 17, grade: "C" },
  { name: "Temi", age: 18, grade: "A" },
  { name: "Josh", age: 19, grade: "B" },
  { name: "Tinu", age: 20, grade: "A" },
];

const filterByGrade = (students, grade) => {
    // const grades = students.map((students) => students.grade); // we're using students.grade bcoz it's an array of objects
    // console.log("STUDENTS GRADE : ", grades);

  const gradeA = students.filter((students) => students.grade === "A"); // we're using students.grade bcoz it's an array of objects
  console.log("GRADE A STUDENTS: ", gradeA);

  const gradeB = students.filter((students) => students.grade === "B");
  console.log("GRADE B STUDENTS: ", gradeB);

  const gradeC = students.filter((students) => students.grade === "C");
  console.log("GRADE C STUDENTS: ", gradeC);

// students.forEach((grade) => {
//     const gradess = students.filter((students) => students.grade);
//     console.log(gradess);
// });
};

filterByGrade(students, "A", "B", "C");

// A Function to calculate the average age
const averageAge = (students) => {
  const totalAges = students.reduce((total, students) => total + students.age, 0);
  return totalAges/students.length;
};

avg = averageAge(students);
console.log("AVERAGE AGE: ", avg);
