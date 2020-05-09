import {Fragment} from 'react';

import Modal from "./Modal";

const Sidebar = (props) => {
    const {categories} = props;

    const renderCategories = () =>
        categories.map(({category, id}) => (
            <a href="#" className="list-group-item" key={id}>{category}</a>
        ));

    return (
        <Fragment>
            <Modal/>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                <a href="#" className="list-group-item" key="0">All</a>
                {renderCategories()}
            </div>
        </Fragment>
    );
};

export default Sidebar;