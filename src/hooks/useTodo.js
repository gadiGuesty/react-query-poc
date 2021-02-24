import {useQuery, useMutation} from 'react-query';

const getTodoById = async (id) => {
    const res = await fetch(
        `http://localhost:8080/posts/${id}`
    );
    return res.json();
};

export const updateTodo = async (data) => {
    const {id, ...body} = data;
    const res = await fetch(`http://localhost:8080/posts/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return res.json();
};

export const newTodo = async (body) => {
    const res = await fetch(`http://localhost:8080/posts/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return res.json();
}

export function useTodo(id, option) {
    return useQuery(['todo', id], () => getTodoById(id), {
        enabled: !!id,
        ...option
    });
}
