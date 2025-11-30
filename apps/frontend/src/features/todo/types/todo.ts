export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface CreateTodoRequest {
  title: string;
  description?: string;
  tags?: string[];
}

export interface UpdateTodoRequest {
  title?: string;
  description?: string;
  completed?: boolean;
  tags?: string[];
}
