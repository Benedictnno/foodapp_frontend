import styled from "styled-components";

export const RandomStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 0;
  font-family: "inter", sans-serif;
  .detail_container {
    position: relative;
    width: 30rem;
  }
  .detail {
    width: 100%;
    height: 2rem;
    position: absolute;
    z-index: 1;
    bottom: 0.2rem;
    /* margin-top: -4rem; */
    background: #d9d9d9;
    opacity: 0.7;
    padding: 0.6rem 0;
    display: flex;
    justify-content: space-between;
  }
  .detail > h1 {
    padding-left: 1rem;
  }
  .detail > h2 {
    padding-right: 1rem;
  }
  img {
    width: 100%;
    height: 20rem;
    border-radius: 5px;
  }
  @media only screen and (max-width: 425px) {
    /*Small smartphones [325px -> 425px]*/
    flex-direction: column;
    .detail_container {
      width: 22rem;
    }
  }
`;
export const RandomStylesContainer = styled.section`
  margin: 5rem 0;
  font-family: "inter", sans-serif;
`;
