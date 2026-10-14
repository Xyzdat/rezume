import React from 'react';
import styles from './modalWindow.module.scss'
import { XCircle, MinusCircle, Expand} from 'lucide-react'

function modalWindow() {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__header}>
        <span className={styles.modal__header_icon_close}><XCircle className='circle' /></span>
        <span className={styles.modal__header_icon_minus}><MinusCircle /></span>
        <span className={styles.modal__header_icon_expand}><Expand /></span>
      </div>
    </div>
  )
}

export default modalWindow;