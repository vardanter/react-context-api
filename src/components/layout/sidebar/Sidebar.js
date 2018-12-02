import React from 'react';
import Gravatar from 'react-gravatar';

import './sidebar.css';

export default ({ children, blocks, ...props }) => {
    let additionalBlocks;
    if (blocks) {
        additionalBlocks = blocks.map(item => {
            const blockBody = item.render();
            return (
                <div className="side-bar-blocks__item" key={item.key}>
                    { blockBody }
                </div>
            )
        });
    }

    return (
        <div className="side-bar" { ...props }>
            <div className="side-bar__blocks">
                { children }
                { additionalBlocks }
            </div>
            <div className="side-bar__gravatar">
                <Gravatar email="vardanter@gmail.com" />
            </div>
        </div>
    )
}