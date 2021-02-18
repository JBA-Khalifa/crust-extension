import React, { Component } from 'react';
import Avatar from '../../common/identicon';
import CrustInput from '../../common/crust-input';

export default class TransferTo extends Component {
  render() {
    const {
      addressValue,
      toValue,
      size,
      theme,
      isError,
      label,
      propName,
      errorMessage,
      onChange,
      onBlur,
      inputRef,
      ...otherProps
    } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        {...otherProps}
      >
        <Avatar value={addressValue} size={size} theme={theme} />
        <CrustInput
          style={{
            width: '251px',
            justifySelf: 'flex-start',
            marginLeft: '22px',
          }}
          value={toValue}
          error={isError}
          label={label}
          name={propName}
          helperText={errorMessage}
          onChange={onChange(propName)}
          onBlur={onBlur}
          inputRef={inputRef}
          spellCheck={false}
        />
      </div>
    );
  }
}
