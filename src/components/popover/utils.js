// eslint-disable-next-line import/prefer-default-export
export const shouldStopEvent = (event) => {
  const validIds = [
    'react-select',
  ];
  const validClasses = [
    'react-tiny-popover-container',
    'day',
    'DayPicker-Day'
  ];
  const validDataAttrs = [
    'data-tiny-popover',
    'data-keep-popover'
  ];
  const isValidId = (target) => validIds.some((id) => target.id.startsWith(id));
  const isValidClass = (target) => validClasses
    .some((classValue) => target.classList.contains(classValue));
  const isValidAttr = (target) => validDataAttrs.some((attr) => target.getAttribute(attr));
  const isValidTarget = (target) => isValidId(target)
    || isValidClass(target) || isValidAttr(target);

  let currentTarget = event.target;
  while (currentTarget != null) {
    if (isValidTarget(currentTarget)) {
      return true;
    }
    currentTarget = currentTarget.parentElement;
  }
  return false;
};
