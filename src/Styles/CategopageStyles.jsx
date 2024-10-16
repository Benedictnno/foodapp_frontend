import styled from "styled-components";

export const CategoryPageStyles = styled.main`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 2fr 9fr;

  .btnContainer {
    display: flex;
    margin: 1rem 0;
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
    cursor: pointer;
  }
  .InputContainer {
    display: flex;
    border: 2px solid;
    margin: 0 0.5rem;
    border-radius: 5px;
  }
  .categoryInputContainer {
    display: flex;
  }
  .categoryInput {
    width: 40rem;
    border: none;
    font-size: 1.1rem;
    padding: 0.5rem;
    outline: none;
  }

  @media only screen and (max-width: 425px) {
    /*Small smartphones [325px -> 425px]*/
    grid-template-columns: 1fr;
    position: relative;

    .categoryInput {
      width: 10rem;

      font-size: 1rem;
      padding: 0.2rem;
    }
  }
`;
