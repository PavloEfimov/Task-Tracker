import React, { Component } from 'react';
import './style.css';
import Editor from 'components/Editor/Editor';
import PostsList from 'components/PostsList/PostsList';

class TaskManager extends Component {
  render() {
    return (
      <div className="managerPlace">
        <Editor
          onExtendedTaskAdd={ this.props.onExtendedTaskAdd }
          onSimpleTaskAdd={ this.props.onSimpleTaskAdd }
        />
        <PostsList posts={ this.props.tasks } onDeleteTodo={this.props.onPostDelete} />
      </div>
    );
  }
}

export default TaskManager;