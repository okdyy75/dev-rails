'use client';

import { useState } from 'react';

export function useTodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  const reset = () => {
    setTitle('');
    setDescription('');
    setTagsInput('');
  };

  return {
    title,
    description,
    tagsInput,
    setTitle,
    setDescription,
    setTagsInput,
    reset,
  };
}
