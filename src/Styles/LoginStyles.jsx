import styled from "styled-components";

export const LoginStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  .formBtn {
    margin: 1rem 0;
  }
  .toggle {
    color: #f1890e;
    cursor:pointer;
  }

  input {
    width: 20rem;
    padding: 1rem 5px;
    background: lightgray;
    margin-top: 1rem;
    font-size: 1.1rem;
    border-radius: 7px;
  }
`;