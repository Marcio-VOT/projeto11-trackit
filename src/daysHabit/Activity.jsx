import axios from "axios";
import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../contexts/UserData";

export default ({ id, name, done, currentSequence, highestSequence }) => {
  const { config, loadDayHabit, setLoadDayHabit } = useContext(LoginContext);
  function setDone(e) {
    let status;
    done ? (status = "uncheck") : (status = "check");
    e.preventDefault();
    console.log("entrou");
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${status}`;
    const promisse = axios.post(URL, {}, config);
    promisse.then(() => setLoadDayHabit(!loadDayHabit));
    promisse.catch((err) => console.log(err));
  }

  return (
    <>
      <StyledHabit>
        <div>
          <h1> {name} </h1>
          <h2>sequencia atual {currentSequence} </h2>
          <h2> melhor sequencia {highestSequence} </h2>
        </div>
        <ion-icon
          onClick={(e) => setDone(e)}
          name="checkmark-outline"
        ></ion-icon>
      </StyledHabit>
    </>
  );
};

const StyledHabit = styled.div`
  width: 90%;
  height: 94px;
  margin-left: 5%;
  padding-left: 5%;
  padding-right: 5%;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    color: #666666;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
  }
  ion-icon {
    width: 69px;
    height: 69px;
    background: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
  }
`;
