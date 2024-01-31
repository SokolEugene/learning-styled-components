import { styled } from "styled-components";

type ImageComponentProps = {
  imageUrl: string;
};

export const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl }) => {
  return <Image src={imageUrl} alt="Dessert" />;
};

const Image = styled.img`
  width: 260px;
  height: 170px;
  flex-shrink: 0;
  border-radius: 10px;
`;
