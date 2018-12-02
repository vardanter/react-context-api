import React from 'react';
import Main from '../layout/main';
import { BrowserRouter} from "react-router-dom";

import './app.css';

const App = (props) => {
    return (
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    )
};

export default App;