import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TinyPopover from 'react-tiny-popover';

const Popover = ({
  content, children, tabIndex, childrenClassName, contentClassName
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const toggle = () => setIsPopoverOpen(!isPopoverOpen);

  return (
    <TinyPopover
      isOpen={isPopoverOpen}
      position={['top', 'right', 'left', 'bottom']}
      padding={10}
      onClickOutside={toggle}
      content={(
        <div className={contentClassName}>
          {content(toggle)}
        </div>
      )}
    >
      <div
        className={childrenClassName}
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
  children: PropTypes.shape.isRequired,
  content: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
  childrenClassName: PropTypes.string,
  contentClassName: PropTypes.string
};

Popover.defaultProps = {
  tabIndex: 0,
  childrenClassName: '',
  contentClassName: ''
};

export default Popover;
