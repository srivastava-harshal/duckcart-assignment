import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";

import Card from "../Card";

import { fetchCreatorsAsync } from "../../actions";

const Creators = ({ creators }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCreatorsAsync());
  }, []);

  const displayDonations = () => {
    console.table(get(creator.id));
  };

  return (
    <div className="container">
      <div className="creators-header">
        <div className="left-header-content">
          <Icon name="list" size="large" />
          <p>TIOBU</p>
        </div>
        <div className="avatar">
          <img src="https://joeschmoe.io/api/v1/random" />
        </div>
      </div>
      <div style={{ fontSize: "1.3rem", paddingLeft: "10px" }}>
        Recommended Creators
      </div>
      <div className="cards">
        {creators.map((creator) => {
          return <Card creator={creator} key={creator.id} />;
        })}
      </div>
      <div className="cta-button">
        <button size="small" onClick={displayDonations}>
          View Donations
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    creators: state.creators,
  };
};

export default connect(mapStateToProps, { fetchCreatorsAsync })(Creators);
