/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'src/services/prop-types';
import classNames from 'classnames';
import { CloseIcon } from 'src/components/icons';
import Tooltip from 'src/components/tooltip';
import ReactPopover from 'react-popover';
import styles from './popover.module.scss';
import { shouldStopEvent } from './utils';

const Popover = ({
  content, children, tabIndex, childrenClassName, contentClassName, displayClose, ...otherProps
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const toggle = () => setIsPopoverOpen(!isPopoverOpen);

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
    <ReactPopover
      isOpen={isPopoverOpen}
      preferPlace="column"
      onOuterAction={(event) => {
        if (shouldStopEvent(event)) {
          return;
        }
        toggle();
      }}
      body={Content}
      {...otherProps}
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
    </ReactPopover>
  );
};

Popover.propTypes = {
  children: PropTypes.children.isRequired,
  content: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
  childrenClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  displayClose: PropTypes.bool
};

Popover.defaultProps = {
  tabIndex: 0,
  childrenClassName: '',
  contentClassName: '',
  displayClose: true
};

export default Popover;
