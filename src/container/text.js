import React from 'react';

import { connect } from 'react-redux';

import { activateText, changeText } from '../actions/index';

// App.js
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text.title || 'Hello World!'}</h1>

        {this.props.text.title ? (
          <button onClick={this.props.changeText}>Undo</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateText({ title: 'Hello World 123!' })
            }
          >
            Change
          </button>
        )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  text: state.text,
});

const mapDispatchToProps = {
  activateText,
  changeText,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
