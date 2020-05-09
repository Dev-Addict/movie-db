import {useState} from 'react';

import {getCategories} from "../actions";

const CreateMovieFrom = () => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        rating: 0,
        image: '',
        cover: '',
        longDesc: '',
        genre: []
    });

    const renderOptions = () => getCategories().map(({category, id}) => <option key={id}>{category}</option>);

    const handleChange = (event) => {
        const {value, name} = event.target;
        setForm({...form, [name]: value});
    };

    const handleGenreChange = (event) => {
        const {options, name} = event.target;
        const value = [];
        for(let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }

        setForm({...form, [name]: value});
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                       placeholder="Lord of the Rings" value={form.name} name="name" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" name="description"
                       placeholder="Somewhere in Middle-earth..." value={form.description} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input type="number" max="5" min="0" className="form-control" id="rating" placeholder="3"
                       value={form.rating} name="rating" onChange={handleChange}/>
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" className="form-control" id="image" placeholder="http://....." value={form.image}
                       name="image" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input type="text" className="form-control" id="cover" placeholder="http://......" value={form.cover}
                       name="cover" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea className="form-control" id="longDesc" rows="3" value={form.longDesc} name="longDesc"
                          onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select multiple className="form-control" id="genre" value={form.genre} name="genre"
                        onChange={handleGenreChange}>
                    {renderOptions()}
                </select>
            </div>
        </form>
    )
};

export default CreateMovieFrom;