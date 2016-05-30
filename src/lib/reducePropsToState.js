import { pluck, max, exists } from "./utils";

// constants
const INITIAL_CODE = -1;

// handle server state
const pluckCode = pluck("code");
const codeReducer = (state, code) => max(state, code);

const reducePropsToState = props => props
    .map(pluckCode)
    .filter(exists)
    .reduce(codeReducer, INITIAL_CODE);

export default reducePropsToState;