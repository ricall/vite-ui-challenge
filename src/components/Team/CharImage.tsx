import './CharImage.css';

type Props = {
  image: string;
  name: string;
  onClick: () => void;
};

export function CharImage({ image, name, onClick }: Props) {
  return (
    <div className="CharImageContainer" onClick={onClick}>
      <span className="HoverLabel">Remove</span>
      <img className="CharImage" src={image} alt={name} />
    </div>
  );
}
