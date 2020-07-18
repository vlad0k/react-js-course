import React, { useState } from 'react';
import classes from './Paginator.module.css';

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChange }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let portionLength = 10;
  const [currentPortion, setCurrentPortion] = useState(parseInt(currentPage/portionLength))
  let portions = [];

  for (let i = 1; i <= pagesCount; i++) {
    let portionIndex = parseInt(i/portionLength);
    if(!portions[portionIndex]) {
      portions[portionIndex] = [];
    }
    portions[portionIndex].push(i);
  }

  const PortionChangeHandler = (e) => {
    e.target.id === 'next' && setCurrentPortion(currentPortion + 1)
    e.target.id === 'prev' && setCurrentPortion(currentPortion - 1)
  }

  return (
    <div className={classes['Paginator']}>
      {(currentPortion !== 0) && <button onClick={PortionChangeHandler} id='prev'>Prev.</button>}

      {
        portions.filter((el, i) => i === currentPortion).map(portion => {
          return portion.map(p => {
            return (<span className={[classes['Paginator__page']+' '+((currentPage === p) && classes['Paginator__page_selected'])]} onClick={() => {onPageChange(p)}}>{p}</span>);
          })

        })
      }

      {currentPortion !== (portions.length - 1) && <button onClick={PortionChangeHandler} id='next'>Next</button>}
    </div>
  )
}

export default Paginator;
