import { FC } from 'react';
import { useStyles } from './useStyles';
import { ReactComponent as ArrowDown } from './svg/arrowDown.svg';
import { ReactComponent as ArrowUp } from './svg/arrowUp.svg';
import { ReactComponent as Check } from './svg/check.svg';

type IconName = 'arrow-up' | 'arrow-down' | 'check';

export type IconProps = {
  name: IconName;
};

export const Icon: FC<IconProps> = ({ name }) => {
  const classes = useStyles();

  switch (name) {
    case 'arrow-down': {
      return <ArrowDown className={classes.icon} />;
    }

    case 'arrow-up': {
      return <ArrowUp className={classes.icon} />;
    }
    
    case 'check': {
      return <Check className={classes.icon} />;
    }

    default: {
      return null;
    }
  }
};
