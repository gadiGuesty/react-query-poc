import {useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {useMutation, useQueryClient} from 'react-query';
import {useTodo, updateTodo} from '../hooks/useTodo';
const Todo =  () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useTodo(id, {refetchOnWindowFocus:false});
    const [isEdit, setEdit] = useState(false);
    const qc = useQueryClient();
    const save = useMutation(updateTodo, {
        onSuccess: (_, data) => {
            qc.setQueryData(['todo', id], data );
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
            <TodoEdit data={data} onSubmit={onSubmit} />
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

const TodoEdit = ({data = {}, onSubmit}) => {
    const [formData, set] = useState({title: data.title, body: data.body});
    const onChange = e => {
        const {value, name} = e.target;
        set(prevVal => ({...prevVal, [name]: value}))
    };
    return(
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit(formData)
        }}>
            <label>
                Title
                <input type="text" name="title" value={formData.title} onChange={onChange}/>
            </label>
            <label>
                Content
                <textarea name="body" value={formData.body} onChange={onChange}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Todo;
