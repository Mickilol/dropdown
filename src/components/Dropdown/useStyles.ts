import { createUseStyles } from 'react-jss';

type Classes =
  'container'
  | 'button'
  | 'buttonFocused'
  | 'buttonIcon'
  | 'dropdown'
  | 'dropdownContent'
  | 'dropdownItem'
  | 'dropdownItemActive'
  | 'input';

type Props = {
  width?: string;
};

const colors = {
  textColor: 'rgb(72, 83, 99)',
  bluePrimary: 'rgb(83, 132, 238)',
  blueSecondary: 'rgba(83, 132, 238, 0.1)',
  greyPrimary: 'rgba(132, 147, 168, 0.2)',
  greySecondary: 'rgba(132, 147, 168, 0.15)',
  white: 'rgb(255, 255, 255)',
  scrollbarThumb: 'rgb(190, 190, 190)'
};

export const useStyles = createUseStyles<Classes, Props>({
  container: {
    position: 'relative',
    display: 'inline-block',
    width: (props) => props.width ? props.width : '200px',
    color: colors.textColor,
    fontSize: '15px'
  },
  button: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '40px',
    padding: '10px 14px',
    border: `1px solid ${colors.greyPrimary}`,
    borderRadius: '12px',
    cursor: 'pointer',
    '&:hover': {
      borderColor: colors.bluePrimary,
    },
  },
  buttonFocused: {
    composes: '$button',
    borderColor: colors.bluePrimary,
    outline: `4px solid ${colors.blueSecondary}`
  },
  buttonIcon: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center'
  },
  dropdown: {
    position: 'absolute',
    top: '120%',
    left: '0',
    width: '100%',
    zIndex: '1',
    border: `1px solid ${colors.greyPrimary}`,
    borderRadius: '16px',
    backgroundColor: colors.white,
    overflow: 'hidden',
    padding: '15px 2px 15px 0',
  },
  dropdownContent: {
    padding: '0 3px 0 10px',
    maxHeight: '244px',
    overflowY: 'auto',
    scrollbarGutter: 'stable',
    '&::-webkit-scrollbar': {
      width: '5px'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
      borderRadius: '100px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: colors.scrollbarThumb,
      borderRadius: '100px'
    }
  },
  dropdownItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: colors.greySecondary,
    },
    '& + &': {
      marginTop: '4px',
    },
  },
  dropdownItemActive: {
    composes: '$dropdownItem',
    backgroundColor: colors.blueSecondary,
    '&:hover': {
      backgroundColor: colors.blueSecondary,
    },
    color: colors.bluePrimary,
  },
  input: {
    display: 'block',
    boxSizing: 'border-box',
    color: colors.textColor,
    width: '100%',
    padding: '8px 12px',
    border: `1px solid ${colors.greyPrimary}`,
    outline: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    marginTop: '4px',
    '&:focus': {
      borderColor: colors.bluePrimary,
    }
  },
});