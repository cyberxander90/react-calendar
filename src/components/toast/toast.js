import React from 'react';
import PropTypes from 'src/services/prop-types';
import { CloseIcon } from 'src/components/icons';

import styles from './toast.module.scss';

const Toast = ({ toasts, onRemoveToast }) => toasts != null && toasts.length > 0 && (
<ul className={styles.toasts}>
  {toasts.map(({ text, id }, i) => (
    <li key={id}>
      <div className={styles.text}>{text}</div>
      <span
        role="button"
        tabIndex={i}
        className={styles.close}
        onClick={() => onRemoveToast(id)}
        onKeyPress={() => onRemoveToast(id)}
      >
        <CloseIcon />
      </span>
    </li>
  )) }
</ul>
);

Toast.propTypes = {
  toasts: PropTypes.arrayOf(PropTypes.toast),
  onRemoveToast: PropTypes.func
};

Toast.defaultProps = {
  toasts: [],
  onRemoveToast: () => { }
};

export default Toast;
