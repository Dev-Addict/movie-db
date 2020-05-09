import {getCategories} from "../actions";

const CreateMovieFrom = () => {
    const renderOptions = () => getCategories().map(({category, id}) => <option key={id}>{category}</option>);

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input type="number" max="5" min="0" className="form-control" id="rating" placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" className="form-control" id="image" placeholder="http://....." />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input type="text" className="form-control" id="cover" placeholder="http://......" />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea className="form-control" id="longDesc" rows="3"/>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select multiple className="form-control" id="genre">
                    {renderOptions()}
                </select>
            </div>
        </form>
    )
};

export default CreateMovieFrom;