import {Fragment} from 'react';

const Sidebar = (props) => {
    return (
        <Fragment>
            <h1 className="my-4">props.appName</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
        </Fragment>
    );
};

export default Sidebar;