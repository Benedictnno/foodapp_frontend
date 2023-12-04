import styled from "styled-components";

export const FooterStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background-color: #f1890e;
  color: #e2d1d1;
  padding: 3rem 6rem;
  @media only screen and (max-width: 425px) {
    display:flex;
    flex-direction: column;
    padding: 3rem 2rem;
   
  }
`;
