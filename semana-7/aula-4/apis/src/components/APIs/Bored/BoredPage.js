import React from "react";
import styled from "styled-components";
import axios from "axios";

const BoredWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  > h2 {
    font-style: italic;
  }
  > section {
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    > * {
      padding: 1rem;
      margin: 0 1rem;
    }
    > div {
      display: flex;
      > button {
        cursor: pointer;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        border: none;
        outline: none;
        box-shadow: none;
        margin: 0 1rem;
        background: #ccc;
        font-weight: bold;
        transition: all 0.2s ease;
        :hover {
          background: #888;
        }
      }
    }
  }
  > div {
    margin-top: 2rem;
  }
`;

class BoredPage extends React.Component {
  state = {
    activity: {},
    nah: false,
  };

  componentDidUpdate() {
    console.log(this.state.activity.activity);
  }

  fetchActivity = async () => {
    try {
      let res = await axios.get("http://www.boredapi.com/api/activity/");
      this.setState({ activity: res.data });
    } catch (err) {
      console.log(err.message);
    }
  };

  yepHandler = () => {
    this.fetchActivity();
  };

  render() {
    return (
      <BoredWrapper>
        <h2>Bored API</h2>
        <section>
          <h5>Are you bored?</h5>
          <div>
            <button onClick={this.yepHandler}>Yep</button>
            <button>Nah</button>
          </div>
        </section>
        <div>
          {this.state.activity ? (
            <p>{this.state.activity.activity}</p>
          ) : (
            <p>Cool.</p>
          )}
        </div>
      </BoredWrapper>
    );
  }
}

export default BoredPage;
