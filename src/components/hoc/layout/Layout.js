import React from 'react';
import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import { Link } from "react-router-dom";


import './layout.css';

export const withLayoutWrapper = (WrappedComponent) => {
    return (props) => {
        return (
            <div className="container">
                <Header blocks={props.headerBlocks}>
                    <h1>A</h1>
                    <div className="header-block">
                        <Link to="/">Home</Link>
                        <Link to="/test">Test</Link>
                    </div>
                </Header>

                <main>
                    <Sidebar blocks={props.sidebarBlocks}/>
                    <section className="content">
                        <WrappedComponent {...props}/>
                    </section>
                </main>
            </div>
        )
    }
};
