import styled from "styled-components";

export const MainCategoryStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem 1rem;
  font-family: "inter", sans-serif;
  text-align: center;
  .drinksImg {
    width: 15rem;
    height: 12rem;
  }
`;
