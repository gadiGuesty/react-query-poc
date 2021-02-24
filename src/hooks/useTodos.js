import {useQuery} from 'react-query';

export const useTodos = (options = {}) => {
   return  useQuery('todos', () => fetch('http://localhost:8080/posts').then(r => r.json()), {refetchOnWindowFocus:false, ...options});
}

