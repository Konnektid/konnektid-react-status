# konnektid-react-status

Set the HTTP status code from inside react components

## Install

```sh
npm install --save konnektid/konnektid-react-status
```

## Client usage

```js
import React from "react";
import StatusCode from "konnektid-react-status";

// render your component
const MyComponent = () => (
    <StatusCode code={404}>
        <div>
            <p>Sorry, page was not found</p>
        </div>
    </StatusCode>   
);

```

## Server usage

```js
import React from "react";
import { renderToString } from "react-dom/server";
import StatusCode from "konnektid-react-status";

// express middleware
const renderPage = (req, res, next) => {

    const html = renderToString(
        React.createElement(MyRootComponent, props)
    );

    // call this AFTER rendering to string!
    const status = StatusCode.rewind();

    // send the status if one was defined
    if (status) res.status(status);

    res.send(html);
};
```
