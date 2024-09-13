import styled from "styled-components";
import { theme } from "../../theme/Theme";

type CardProps = {
  title: string;
  description: string;
  imgUrl: string;
};

export default function Card({ title, description, imgUrl }: CardProps) {
  return (
    <CardStyled>
      <div
        className="card_head"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="card_info">
        <h2 className="card_info-title">{title}</h2>
        <div className="card_info-description">{description}</div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 35rem;
  height: 45rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 1px 1px ${theme.colors.greyLight};

  .card_head {
    height: 60%;
    background-size: cover;
    background-position: center;
    border-radius: 1.5rem 1.5rem 0 0;
  }

  .card_info {
    height: 40%;
    padding: 2rem;
    background: ${theme.colors.white};

    &-title {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;
