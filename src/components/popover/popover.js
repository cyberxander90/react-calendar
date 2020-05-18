import React, { useState } from 'react';
import PropTypes from 'src/services/prop-types';
import TinyPopover from 'react-tiny-popover';
import classNames from 'classnames';
import { CloseIcon } from 'src/components/icons';
import Tooltip from 'src/components/tooltip';
import styles from './popover.module.scss';
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
    <div className={classNames(contentClassName, styles.popover)}>
      {displayClose && (
        <Tooltip
          text="Close"
          className={classNames(styles.close, 'action-icon', 'pointer')}
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
  children: PropTypes.children.isRequired,
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
