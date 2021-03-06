import React from 'react';


export default class Message extends React.Component {

    render() {

        return (
            <div>
                <p>
                    Hello Word <code>{this.props.name || "React"}</code>!
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Whant more? Learn React
                </a>
            </div>
        )
    }

}
