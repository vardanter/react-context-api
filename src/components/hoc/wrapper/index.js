import React, { Component } from 'react';
import {BlockProvider} from "../../../service";
import { HEADER_BLOCK, SIDEBAR_BLOCK} from "../../../constants";

const wrapper = (WrappedComponent) => {
    return class extends Component {
        state = {
            headerBlocks: [],
            sidebarBlocks: []
        };

        isBlockExists = (block, prevState) => {
            return prevState.find(item => item.key === block.key);
        };

        addBlock = (action) => {
            switch (action.type) {
                case HEADER_BLOCK:
                    if (!this.isBlockExists(action.block, this.state.headerBlocks)) {
                        this.setState(({headerBlocks}) => {
                            const newHeaderBlocks = headerBlocks.slice(0);
                            newHeaderBlocks.push(action.block);
                            return {
                                headerBlocks: newHeaderBlocks
                            };
                        });
                    }
                    break;
                case SIDEBAR_BLOCK:
                    if (!this.isBlockExists(action.block, this.state.sidebarBlocks)) {
                        this.setState(({sidebarBlocks}) => {
                            const newSidebarBlocks = sidebarBlocks.slice(0);
                            newSidebarBlocks.push(action.block);
                            return {
                                sidebarBlocks: newSidebarBlocks
                            };
                        });
                    }
                    break;
                default:
            }
        };

        removeBlock = (action) => {
            switch (action.type) {
                case HEADER_BLOCK:
                    this.setState(({headerBlocks}) => {
                        const index = headerBlocks.findIndex(item => item.key === action.key);
                        let newHeaderBlocks = index !== -1 ? [ ...headerBlocks.slice(0, index), ...headerBlocks.slice(index+1)] : headerBlocks;
                        return {
                            headerBlocks: newHeaderBlocks
                        }
                    });
                    break;
                case SIDEBAR_BLOCK:
                    this.setState(({sidebarBlocks}) => {
                        const index = sidebarBlocks.findIndex(item => item.key === action.key);
                        let newSidebarBlocks = index !== -1 ? [...sidebarBlocks.slice(0, index), ...sidebarBlocks.slice(index + 1)] : sidebarBlocks;
                        return {
                            sidebarBlocks: newSidebarBlocks
                        }
                    });
                    break;
                default:
            }
        };

        render() {
            const { headerBlocks, sidebarBlocks } = this.state;
            const blockService = {
                addBlock: this.addBlock,
                removeBlock: this.removeBlock
            };

            return (
                <BlockProvider value={blockService}>
                    <WrappedComponent
                        { ...this.props }
                        headerBlocks={headerBlocks}
                        sidebarBlocks={sidebarBlocks}
                    />
                </BlockProvider>
            )
        }
    }
};

export default wrapper;