import React from 'react';
import { useStudentContext } from '../utils/StudentContext';

export default function StudentList() {
  const { studentData } = useStudentContext();

  return (
    <>
      <span>Looks good here, make sure to run the tests!</span>
      <ul>
        {studentData.students.map((student) => (
          <li key={student.id}>
            {student.name} : {student.major}
          </li>
        ))}
      </ul>
    </>
  );
}
