import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import {
  Dropdown,
  Input,
  TextArea,
  Form,
  Icon,
  Message,
  Button,
} from "semantic-ui-react";

import { saveOrUpdate } from "../../utils/store";

import { selectedCreator } from "../../actions";

const options = [
  { key: "$", text: "$", value: "$" },
  { key: "₹", text: "₹", value: "₹" },
];

const initialData = {
  currency: "₹",
  amount: "",
  name: "",
  message: "",
};

const Creator = ({ creator }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [donation, setDonation] = useState(initialData);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = location.pathname.slice(-2);
    dispatch(selectedCreator(id));
  }, []);

  const handleChange = (key, value) => {
    setDonation({ ...donation, [key]: value });
  };

  const onSubmitHandle = () => {
    saveOrUpdate(creator.id, donation);
    setDonation(initialData);
    setVisible(true);
    setMessage(`Thanks for donating ${donation.currency}${donation.amount}!`);
    setTimeout(() => {
      setVisible("");
    }, 1000);
  };

  return (
    <>
      <div className="creator-container">
        <div className="creator-header">
          <div className="creator-info">
            <Icon
              name="angle left"
              size="large"
              link={true}
              onClick={() => navigate("/all-creators")}
            />
            <div className="avatar">
              <img src={creator.profilePicture} alt="profile-picture" />
            </div>
            <div style={{ fontSize: "1.3rem" }}>{creator.userName}</div>
          </div>
        </div>
        <div className="donation-wrapper">
          <div>
            <p className="creator-content">
              Send your love to {creator.userName} to become a real fan.
            </p>
          </div>
          <div>
            <Input
              type="number"
              value={donation.amount}
              onChange={(e) => handleChange("amount", e.target.value)}
              style={{ width: "100%" }}
              label={
                <Dropdown
                  style={{ zIndex: 999 }}
                  onChange={(e) => {
                    handleChange("currency", e.target.outerText);
                  }}
                  value={donation.currency}
                  options={options}
                />
              }
              labelPosition="left"
              placeholder="100"
            />
          </div>
          <div>
            <Input
              value={donation.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your Name (optional)"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <Form>
              <TextArea
                value={donation.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Say something nice! (optional)"
              />
            </Form>
          </div>
        </div>
        <div className="cta-button">
          <button onClick={onSubmitHandle}>
            Support {donation.amount ? donation.currency : null}
            {donation.amount}
          </button>
        </div>
      </div>
      <div
        className={`success-message ${
          Boolean(visible) ? "visible" : "invisible"
        }`}
      >
        <Message color="green">{message}</Message>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  creator: state.selectedCreator,
});

export default connect(mapStateToProps)(Creator);
