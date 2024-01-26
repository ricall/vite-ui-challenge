import clsx from 'clsx';

import './TotalScore.css';

type Props = {
  label: string;
  value?: number;
};

const formatNumber = (number?: number) => {
  if (number === undefined) {
    return '-';
  }
  if (number === Math.round(number)) {
    return `${number}`;
  }
  return number.toFixed(2);
};

export function TotalScore({ label, value }: Props) {
  const displayValue = formatNumber(value);
  return (
    <div className="TotalScore">
      <div className="Label">{label}</div>
      <div className={clsx('Value', { MaxValue: displayValue === '10' })}>{displayValue}</div>
    </div>
  );
}
