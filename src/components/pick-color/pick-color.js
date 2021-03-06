/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import chroma from 'chroma-js';
import classNames from 'classnames';
import stylesColorPicker from './pick-color.module.scss';

const colourOptions = [
  ['red', 'Red'],
  ['blue', 'Blue'],
  ['green', 'Green'],
].map(([color, label]) => ({ color, label, value: color }));

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, {
    data, isFocused, isSelected
  }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color
        : isFocused
          ? color.alpha(0.1).css()
          : null,
      color: isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: 'pointer',

      ':active': {
        ...styles[':active'],
        backgroundColor: isSelected ? data.color : color.alpha(0.3).css(),
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const PickColor = ({ color, className, onChange }) => (
  <>
    <label htmlFor="pick-color" className="hide">Pick Color</label>
    <Select
      inputId="pick-color"
      className={classNames(stylesColorPicker.pick, className)}
      defaultValue={colourOptions.find((item) => color === item.color)}
      label="Pick Color"
      placeholder="Color"
      options={colourOptions}
      styles={colourStyles}
      onChange={(item) => onChange(item.color)}
    />
  </>
);

PickColor.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

PickColor.defaultProps = {
  color: '',
  className: '',
  onChange: () => {}
};

export default PickColor;
