import {useState} from 'react';

const TodoForm = ({data = {}, onSubmit}) => {
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

export default TodoForm
