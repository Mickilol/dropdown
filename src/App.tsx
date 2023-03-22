import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Dropdown, { Option } from './components/Dropdown';

const OPTIONS: Option[] = [
  {
    label: 'Yeeeah, science',
    selectedLabel: 'Science',
    value: 'SCIENCE'
  },
  {
    label: 'Education',
    selectedLabel: 'Education',
    value: 'EDUCATION'
  },
  {
    label: 'Art',
    selectedLabel: 'Art',
    value: 'ART'
  },
  {
    label: 'Sport',
    selectedLabel: 'Sport',
    value: 'SPORT'
  },
  {
    label: 'Games',
    selectedLabel: 'Games',
    value: 'GAMES'
  },
  {
    label: 'Health',
    selectedLabel: 'Health',
    value: 'HEALTH'
  },
  {
    label: 'Literature',
    selectedLabel: 'Literature',
    value: 'LITERATURE'
  },
  {
    label: 'Television',
    selectedLabel: 'Television',
    value: 'TELEVISION'
  }
];

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
});

const App = () => {
  const styles = useStyles();
  const [value, setValue] = useState('ART');

  return (
    <div className={styles.container}>
      <Dropdown
        value={value}
        onChange={setValue}
        options={OPTIONS}
        inputWidth='250px'
      />
    </div>
  );
}

export default App;
