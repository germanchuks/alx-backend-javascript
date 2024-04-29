// 2-get_students_by_loc.js

export default function getStudentsByLocation(students, city) {
  return students.filter((students) => students.location === city);
}
