import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TinyPopover from 'react-tiny-popover';

const Popover = ({
  content, children, tabIndex, childrenClassName, contentClassName, className
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const toggle = () => setIsPopoverOpen(!isPopoverOpen);

  const onClickOutside = ({ target }) => {
    // console.log(target);
    if (target.id.startsWith('react-select')
      || target.getAttribute('data-tiny-popover')) {
      return;
    }
    toggle();
  };

  const Content = (
    <div className={contentClassName}>
      {content(toggle)}
    </div>
  );

  return (
    <TinyPopover
      contentClassName={className}
      isOpen={isPopoverOpen}
      position={['top', 'right', 'left', 'bottom']}
      padding={10}
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
  className: PropTypes.string
};

Popover.defaultProps = {
  tabIndex: 0,
  childrenClassName: '',
  contentClassName: '',
  className: ''
};

export default Popover;
