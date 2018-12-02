import React, { Component } from 'react';
import {withConsumer} from "../hoc/withConsumer";
import {HEADER_BLOCK} from "../../constants";

class Test extends Component {
    componentDidMount() {
        const {blockService} = this.props;
        blockService.addBlock({
            type: HEADER_BLOCK,
            block: {
                key: "Test-text",
                render: () => {
                    return (
                        <div>
                            <h3>This component added from child component "Test" to Header</h3>
                        </div>
                    );
                }
            }
        });
    }

    componentWillUnmount() {
        const { blockService } = this.props;
        blockService.removeBlock({
            type: HEADER_BLOCK,
            key: 'Test-text'
        });
    }

    render() {
        return (
            <div>test</div>
        )
    }
}

export default withConsumer(Test);