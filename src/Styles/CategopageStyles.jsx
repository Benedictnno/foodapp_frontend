import styled from "styled-components";

export const CategoryPageStyles = styled.main`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 2fr 9fr;
  .btnContainer {
    display: flex;

    margin: 1rem 0;

    /* justify-content: space-between; */
  }
  .ingredients_text {
    
    margin: 1rem 0;
    transition: all 0.1s ease-in-out;
  }
  .ingredients_text:hover {
    background: #f1890e;
    padding: 0.3rem;
    color: #fff;
    border-radius: 5px;
    cursor:pointer;
  }
  .InputContainer {
    display: flex;
    border: 2px solid;
    margin: 0 1rem;
  }
  .categoryInputContainer {
    display: flex;
  }
  .categoryInput {
    width: 40rem;
    border:none;
    font-size:1.1rem;
    padding:.5rem;
  }
`;
