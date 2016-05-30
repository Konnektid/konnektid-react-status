import React from "react";

// creates a component that just renders its children
const createDumbComponent = () =>
    props =>
        props.children ? React.Children.only(props.children) : <noscript />;

export default createDumbComponent;