import { FC } from 'react';
import { Icon } from '../Icon';
import { useDropdown } from './useDropdown';
import { useStyles } from './useStyles';

export type Option = {
  value: string;
  label: string;
  selectedLabel: string;
}

type Props = {
  options: Option[];
  value?: string;
  inputWidth?: string;
  onChange?: (value: string) => void;
}

export const Dropdown: FC<Props> = ({ options: initialOptions, value, inputWidth, onChange }) => {
  const classes = useStyles({ width: inputWidth });

  const {
    containerRef,
    isOpen,
    selectedOption,
    inputValue,
    options,
    toggleDropdown,
    handleOptionClick,
    handleInputChange,
    handleKeyDown,
  } = useDropdown(initialOptions, value, onChange);

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={isOpen ? classes.buttonFocused : classes.button} onClick={toggleDropdown}>
        <span>{selectedOption?.selectedLabel}</span>

        <span className={classes.buttonIcon}>
          {isOpen ? <Icon name='arrow-up' /> : <Icon name='arrow-down' />}
        </span>
      </div>

      {isOpen && (
        <div className={classes.dropdown}>
          <div className={classes.dropdownContent}>
            {options.map((option) => (
              <div
                key={option.value}
                className={option.value === value ? classes.dropdownItemActive : classes.dropdownItem}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}

                {option.value === value && <Icon name='check' />}
              </div>
            ))}

            <input
              type='text'
              className={classes.input}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder='Type to add new item and press enter'
            />
          </div>
        </div>
      )}
    </div>
  )
};

