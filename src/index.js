// dependencies
import React from "react";
import withSideEffect from "react-side-effect";
import createDumbComponent from "./lib/createDumbComponent";
import reducePropsToState from "./lib/reducePropsToState";
import handleClientStateChange from "./lib/handleClientStateChange";

// main component
const StatusCode = createDumbComponent();
StatusCode.propTypes = {
    code: React.PropTypes.number.isRequired
};

// decorator
const applySideEffect = withSideEffect(reducePropsToState, handleClientStateChange);

// ship it!
export default applySideEffect(StatusCode);