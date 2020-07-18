import React, { useState, useEffect } from 'react';

const ProfileStatusHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [inputValue, setInputValue] = useState(props.status);

  const activateEditMode = () => {
    if (props.pageID === props.myID || !props.pageID){
      setEditMode(true);
    }
  }

  useEffect(() => {
      setInputValue(props.status);
  }, [props.status]);

  const statusInputChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const deactivateEditMode = (e) => {
    e.preventDefault();
    setEditMode(false);
    props.updateStatus(inputValue);
  }

  return (
    <>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{props.status ? inputValue : 'no-status'}</span>
        </div>
      }
      {editMode &&
        <form onSubmit={deactivateEditMode}>
          <input onBlur={deactivateEditMode} onChange={statusInputChangeHandler} value={inputValue} autoFocus={true}></input>
        </form>}
    </>
  );
}

export default ProfileStatusHooks;
