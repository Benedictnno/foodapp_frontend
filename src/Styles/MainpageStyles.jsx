import styled from "styled-components";

export const MainPageStyles = styled.section`
  display: flex;
  margin-top: 5rem;
  h1 {
    font-size: 3rem;
    font-family: "Irish Grover";
  }
  .blob_container {
    position: relative;
    margin-top: -4rem;
  }
  .blob {
    position: absolute;
    z-index: -1;
    margin-top: -2rem;
   
    padding:-2rem
  }
  .img {
    max-width: 40rem;
    height: 20rem;
    margin-right: -1rem;
     
  }
`;
