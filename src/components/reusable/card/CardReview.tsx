import { RxStarFilled } from "react-icons/rx";
import styled from "styled-components";

type CardReviewProps = {
  profile: string;
  comment: string;
  note: number;
};

export default function CardReview({
  profile,
  comment,
  note,
}: CardReviewProps) {
  return (
    <CardReviewStyled>
      <div className="review_profile">
        <strong>{profile}</strong>
        <div className="review_profile_note">
          {note}
          <RxStarFilled />
        </div>
      </div>
      <div className="review_comment">{comment}</div>
    </CardReviewStyled>
  );
}

const CardReviewStyled = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  width: 32rem;
  height: 18rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .review_profile {
    display: flex;
    align-items: center;
    gap: 1rem;

    &_note {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
    }
  }
`;
