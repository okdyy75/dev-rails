'use client';

import { useState } from 'react';

export function useTodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const reset = () => {
    setTitle('');
    setDescription('');
  };

  return {
    title,
    description,
    setTitle,
    setDescription,
    reset,
  };
}
