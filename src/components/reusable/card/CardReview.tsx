import styled from "styled-components";

type CardReviewProps = {
  profile: string;
  comment: string;
};

export default function CardReview({ profile, comment }: CardReviewProps) {
  return (
    <CardReviewStyled>
      <div className="review_profile">{profile}</div>
      <div className="review_comment">{comment}</div>
    </CardReviewStyled>
  );
}

const CardReviewStyled = styled.div``;
