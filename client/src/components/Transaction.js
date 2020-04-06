import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ t }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  // Get sign
  const sign = t.amount < 0 ? '-' : '+'

  return (
    <div>
      <li className={t.amount < 0 ? 'minus' : 'plus'}>
        {t.text}{' '}
        <span>
          {sign}${Math.abs(t.amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(t._id)}>
          x
        </button>
      </li>
    </div>
  )
}
