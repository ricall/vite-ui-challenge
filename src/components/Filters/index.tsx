import { tagNames } from '../../model';
import './Filters.css';
import { TagBadge } from '../TagBadge';
import { useCharacterStore } from '../../store/characters.ts';

export function Filters() {
  const { isTagSelected, toggleTag, setTags } = useCharacterStore();

  const handleToggleTag = (tag: string) => () => toggleTag(tag);
  const handleClearAll = () => setTags([]);

  return (
    <div className="Filters">
      {tagNames.map((tag) => (
        <TagBadge key={tag} label={tag} isChecked={isTagSelected(tag)} onClick={handleToggleTag(tag)} />
      ))}
      <div className="Clear" onClick={handleClearAll}>
        Clear all
      </div>
    </div>
  );
}
