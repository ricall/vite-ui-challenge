import clsx from 'clsx';

import './TagBadge.css';

type Props = {
  label: string;
  isChecked?: boolean;
  onClick?: (_label: string) => void;
};

const displayTextForLabel = (label: string) =>
  label
    .split(' ')
    .map((text) => text[0].toUpperCase() + text.substring(1))
    .join(' ');

export function TagBadge({ label, isChecked, onClick }: Props) {
  const displayLabel = displayTextForLabel(label);
  const handleOnClick = () => onClick?.(label);

  return (
    <button className={clsx('TagBadge', { TagBadgeChecked: isChecked })} onClick={handleOnClick}>
      {isChecked && '\u2713 '}
      {displayLabel}
    </button>
  );
}
