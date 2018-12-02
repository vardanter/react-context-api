import React from 'react';
import {BlockConsumer} from "../../../service";

const withConsumer = (WrappedComponent) => {
    return (props) => {
        return (
            <BlockConsumer>
                {
                    (blockService) => {
                        return (
                            <WrappedComponent {...props} blockService={blockService}/>
                        )
                    }
                }
            </BlockConsumer>
        )
    }
};

export {withConsumer};