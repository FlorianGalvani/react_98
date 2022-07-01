interface Props {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Image: React.FC<Props> = (props) => {
  return <img {...props} />;
};

export default Image;
