import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    inputValue: this.props.status
  }

  activateEditMode = () => {
    if (this.props.pageID === this.props.myID || !this.props.pageID){
      this.setState({editMode: true});
    }
  }

  statusInputChangeHandler = (e) => {
    this.setState({inputValue: e.target.value});
  }

  deactivateEditMode = (e) => {
    e.preventDefault();
    this.setState({editMode: false});
    this.props.updateStatus(this.state.inputValue);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status){
      this.setState({inputValue: this.props.status});
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode && <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status ? this.state.inputValue : 'no-status'}</span>
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
