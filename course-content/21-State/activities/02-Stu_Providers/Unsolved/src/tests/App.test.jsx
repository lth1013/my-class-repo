import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import StudentList from '../components/StudentList';
import { StudentProvider } from '../utils/StudentContext';

test('StudentList shows value from provider', async () => {
  render(
    <StudentProvider>
      <StudentList />
    </StudentProvider>
  );

  // Wait for the content to load
  await waitFor(() => {
    const students = screen.getAllByText(/.*: .*/);
    expect(students.length).toBeGreaterThan(0);
  });
});
