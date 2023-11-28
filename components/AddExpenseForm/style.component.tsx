import styled from "styled-components";


export const AddExpenseFormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;

  input {
    padding: 6px;
    margin-right: 8px;
    border: black solid 1px;
  }

  button, select {
    padding: 8px 16px;
    background-color: #0088FE;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px;
  }

`;