import styled from "styled-components";

export const TopNavStyled = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: #f1890e;
  }
  .navLink {
    text-decoration: none;
    font-size: 2rem;
    color:#000;
    font-family:'lato',sans-serif;
  }
  .dot {
    height: 20px;
    width: 20px;
    background-color: #f1890e;
    border-radius: 50%;
    display: inline-block;
    
  }

  @media only screen and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
  flex-direction:column;
}
`;
export const TopStyled = styled.div`
  margin: 1rem 6rem;
  @media only screen and (max-width: 425px){
    margin: 1rem 1rem;
	/*Small smartphones [325px -> 425px]*/
}
`;
