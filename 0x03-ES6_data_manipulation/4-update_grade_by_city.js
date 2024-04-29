// 4-update_grade_by_city.js

export default function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudentsInCity = students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((obj) => (
        obj.studentId === student.id
      ));
      if (studentGrade) {
        return { ...student, grade: studentGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });

  return updatedStudentsInCity;
}
