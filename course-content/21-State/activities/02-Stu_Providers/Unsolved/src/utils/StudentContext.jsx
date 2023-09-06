import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const initialState = {
    students: [
      {
        id: 1,
        name: "John Doe",
        major: "Computer Science"
      },
      {
        id: 2,
        name: "Jane Smith",
        major: "Mathematics"
      }
    ],
  };

  const [studentData, setStudentData] = useState(initialState);

  return (
    <StudentContext.Provider value={{ studentData, setStudentData }}>
      {children}
    </StudentContext.Provider>
  );
};
