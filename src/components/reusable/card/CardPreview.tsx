import styled from "styled-components";
import { theme } from "../../../theme/Theme";

type CardPreviewProps = {
  title: string;
  description: string;
  imgUrl: string;
};

export default function CardPreview({
  title,
  description,
  imgUrl,
}: CardPreviewProps) {
  return (
    <CardPreviewStyled>
      <div
        className="cardPreview_head"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="cardPreview_info">
        <h3 className="cardPreview_info-title">{title}</h3>
        <div className="cardPreview_info-description">{description}</div>
      </div>
    </CardPreviewStyled>
  );
}

const CardPreviewStyled = styled.div`
  width: 35rem;
  height: 45rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 1px 1px ${theme.colors.greyLight};

  .cardPreview_head {
    height: 60%;
    background-size: cover;
    background-position: center;
    border-radius: 1.5rem 1.5rem 0 0;
  }

  .cardPreview_info {
    height: 40%;
    padding: 2rem;
    background: ${theme.colors.white};

    &-title {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;
