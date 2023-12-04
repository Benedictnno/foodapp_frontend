import styled from "styled-components";

export const BottomStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem 1rem;
  /* column-gap: 1rem; */
  margin-top: 1rem;

  @media only screen and (max-width: 425px) {
   display:flex;
   flex-direction: column;
   
  }
`;