import {useState} from "react";
import './FormOne.css';

const FormOne = () => {
    const [title, setTitle] = useState('John');
    const [body, setBody] = useState('Doe');
    return (
        <div className="form">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}

export default FormOne;