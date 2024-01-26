import { tagNames } from '../../model';
import './Filters.css';
import { TagBadge } from '../TagBadge';

type Props = {
  tags: string[];
  setTags: (tags: string[]) => void;
};

export function Filters({ tags, setTags }: Props) {
  const isChecked = (tag: string) => tags.includes(tag);
  const handleToggleTag = (tag: string) => () => {
    if (isChecked(tag)) {
      setTags(tags.filter((current) => current !== tag));
    } else {
      setTags([tag, ...tags]);
    }
  };

  const handleClearAll = () => setTags([]);

  return (
    <div className="Filters">
      {tagNames.map((tag) => (
        <TagBadge key={tag} label={tag} isChecked={isChecked(tag)} onClick={handleToggleTag(tag)} />
      ))}
      <div className="Clear" onClick={handleClearAll}>
        Clear all
      </div>
    </div>
  );
}
