import { ComponentPropsWithoutRef, useId } from 'react';

type LabeledInputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

const LabeledInput = ({ label, ...props }: LabeledInputProps) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default LabeledInput;
