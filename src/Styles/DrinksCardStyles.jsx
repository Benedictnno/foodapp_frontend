import styled from "styled-components";

export const DrinksCardStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem 1rem;
  /* column-gap: 1rem; */
  margin-top: 1rem;
  img {
    width: 300px;
    border-radius: 10px;
  }
  .item {
    /* margin-right:1rem; */
  }
`;
