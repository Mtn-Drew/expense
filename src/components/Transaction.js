import React from 'react'

export const Transaction = ({ t }) => {
  // Get sign
  const sign = t.amount < 0 ? '-' : '+'

  return (
    <div>
      <li className={t.amount < 0 ? 'minus' : 'plus'}>
        {t.text}{' '}
        <span>
          {sign}${Math.abs(t.amount)}
        </span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  )
}
