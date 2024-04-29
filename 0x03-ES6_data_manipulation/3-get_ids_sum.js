// 3-get_ids_sum.js

export default function getStudentIdsSum(students) {
  return students.reduce((acc, curr) => curr.id + acc, 0);
}
