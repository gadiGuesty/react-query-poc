import {useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {useMutation, useQueryClient} from 'react-query';
import {useTodo, updateTodo} from '../hooks/useTodo';
import TodoForm from './TodoForm';

const Todo =  () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useTodo(id, {refetchOnWindowFocus:false});
    const [isEdit, setEdit] = useState(false);
    const qc = useQueryClient();
    const save = useMutation(updateTodo, {
        onSuccess: (response, syncData) => {
            qc.setQueryData(['todo', id], syncData );
            setEdit(false);
        }
    });
    const onSubmit = vals => {
        save.mutate({
            id,
            ...vals
        })
    }
    return data ? (
        isEdit ? (
            <TodoForm data={data} onSubmit={onSubmit} />
        ) : (
            <div className="todo">
                <Link to="/">back</Link>
                <h3>Title</h3>
                <p>{data.title}</p>
                <h5>Content</h5>
                <p>{data.body}</p>
                <button onClick={() => setEdit(true)}>Edit</button>
            </div>
        )
    ) : null
}

export default Todo;
