import { useEffect, useRef, useState } from 'react';
import { Option } from './Dropdown';

export const useDropdown = (initialOptions: Option[], value?: string, onChange?: (value: string) => void) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(initialOptions);
  const [selectedOption, setSelectedOption] = useState<Option | null>(() => value
    ? options.find(item => item.value === value) || null
    : null
  );
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setSelectedOption(options.find(item => item.value === value) || null);
  }, [options, value]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const node = event.target as HTMLElement;
      const containerNode = containerRef.current;

      if (isOpen && !containerNode?.contains(node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (inputValue && !options.some(option => option.label.toLowerCase() === inputValue.toLowerCase())) {
        const newOption: Option = {
          value: inputValue,
          label: inputValue,
          selectedLabel: inputValue
        };

        setOptions([...options, newOption]);
        onChange?.(newOption.value);
        setInputValue('');
        setIsOpen(false);
      }
    }
  };

  return {
    containerRef,
    isOpen,
    selectedOption,
    inputValue,
    options,
    toggleDropdown,
    handleOptionClick,
    handleInputChange,
    handleKeyDown,
  };
};