import React from 'react';
import { getTodos } from '../api/todos';
import { ErrorType } from '../types/Errors';
import { Todo } from '../types/Todo';

type Params = {
  inputRef: React.RefObject<HTMLInputElement>;
  setError: React.Dispatch<React.SetStateAction<ErrorType | null>>;
};

export const useTodos = ({ inputRef, setError }: Params) => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    inputRef.current?.focus();

    const loadTodos = async () => {
      try {
        setError(null);

        const data = await getTodos();

        setTodoList(data);
      } catch {
        setError('unableToLoad');
      } finally {
        setIsLoading(false);
      }
    };

    void loadTodos();
  }, [inputRef, setError]);

  return {
    todoList,
    setTodoList,
    isLoading,
  };
};
