import React from 'react';

import './header.css';

export default ({ children, blocks, ...props }) => {
    let additionalBlocks;
    if (blocks) {
        additionalBlocks = blocks.map(item => {
            const blockBody = item.render();
            return (
                <div className="header-block" key={item.key}>
                    { blockBody }
                </div>
            )
        });
    }

    return (
        <header {...props}>
            {children}
            {additionalBlocks}
        </header>
    );
};