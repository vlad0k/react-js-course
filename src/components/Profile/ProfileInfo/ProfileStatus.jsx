import React from 'react';

import { usersAPI } from '../../../api/api.js';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    inputValue: this.props.status
  }

  activateEditMode = () => {
    this.setState({editMode: true});
  }

  statusInputChangeHandler = (e) => {
    this.setState({inputValue: e.target.value});
  }

  deactivateEditMode = (e) => {
    e.preventDefault();
    this.setState({editMode: false});
    usersAPI.updateStatus(this.state.inputValue);
  }

  render() {
    return (
      <>
        {!this.state.editMode && <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.inputValue}</span>
          </div>
        }
        {this.state.editMode && <form onSubmit={this.deactivateEditMode}>
          <input onBlur={this.deactivateEditMode} onChange={this.statusInputChangeHandler} value={this.state.inputValue} autoFocus={true}></input>
        </form>}
      </>
    );
  }
}

export default ProfileStatus;
