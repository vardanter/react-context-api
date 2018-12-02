import React, { Component } from 'react';
import {withConsumer} from "../hoc/withConsumer";
import {SIDEBAR_BLOCK, HEADER_BLOCK} from "../../constants";

class Home extends Component {
    componentDidMount() {
        const {blockService} = this.props;
        blockService.addBlock({
            type: HEADER_BLOCK,
            block: {
                key: "Home-button",
                render: () => {
                    return (
                        <button>Test button from another component</button>
                    );
                }
            }
        });

        blockService.addBlock({
            type: SIDEBAR_BLOCK,
            block: {
                key: "Home-button",
                render: () => {
                    return (
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">G</a>
                    );
                }
            }
        });
        blockService.addBlock({
            type: SIDEBAR_BLOCK,
            block: {
                key: "Home-button2",
                render: () => {
                    return (
                        <a href="https://yandex.ru" target="_blank" rel="noopener noreferrer">Y</a>
                    );
                }
            }
        });
    }

    componentWillUnmount() {
        const { blockService } = this.props;
        blockService.removeBlock({
            type: HEADER_BLOCK,
            key: 'Home-button'
        });
        blockService.removeBlock({
            type: SIDEBAR_BLOCK,
            key: 'Home-button'
        });
        blockService.removeBlock({
            type: SIDEBAR_BLOCK,
            key: 'Home-button2'
        });
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

export default withConsumer(Home);