import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TinyPopover from 'react-tiny-popover';

import styles from './tooltip.module.scss';

const Tooltip = ({
  text, children, inline, ...otherProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <TinyPopover
      isOpen={isOpen}
      position={['top', 'bottom', 'right', 'left']}
      padding={3}
      content={<div className={styles.tooltip}>{text}</div>}
    >
      <div
        style={inline ? { display: 'inline-block' } : {}}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        {children}
      </div>
    </TinyPopover>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  inline: PropTypes.bool,
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  text: '',
  children: null,
  inline: false,
  className: ''
};

export default Tooltip;
