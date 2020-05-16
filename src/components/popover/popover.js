import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TinyPopover from 'react-tiny-popover';

import styles from './popover.module.scss';
import { CloseIcon } from '../icons';
import Tooltip from '../tooltip';
import { shouldStopEvent } from './utils';

const Popover = ({
  content, children, tabIndex, childrenClassName, contentClassName, className, displayClose
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const toggle = () => setIsPopoverOpen(!isPopoverOpen);

  const onClickOutside = (event) => {
    if (shouldStopEvent(event)) {
      event.stopPropagation();
      return;
    }
    toggle();
  };

  const Content = (
    <div className={`${contentClassName} ${styles.popover}`}>
      {displayClose && (
        <Tooltip
          text="Close"
          className={`${styles.close} action-icon pointer`}
          onClick={toggle}
        >
          <CloseIcon />
        </Tooltip>
      )}
      {content(toggle)}
    </div>
  );

  return (
    <TinyPopover
      contentClassName={className}
      isOpen={isPopoverOpen}
      onClickOutside={onClickOutside}
      content={Content}
    >
      <div
        className={childrenClassName || ''}
        role="button"
        onClick={toggle}
        onKeyDown={toggle}
        tabIndex={tabIndex}
      >
        {children}
      </div>
    </TinyPopover>
  );
};

Popover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  content: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
  childrenClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  displayClose: PropTypes.bool
};

Popover.defaultProps = {
  tabIndex: 0,
  childrenClassName: '',
  contentClassName: '',
  className: '',
  displayClose: true
};

export default Popover;
