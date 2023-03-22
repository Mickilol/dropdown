import { createUseStyles } from 'react-jss';

type Classes = 'icon';

export const useStyles = createUseStyles<Classes>({
  icon: {
    fill: 'currentColor',
    height: '15px'
  }
});