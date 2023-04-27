import React from "react";
import { Checkmark } from "react-checkmark";
import { Container, Stack, Button } from "react-bootstrap";

export default function Benefits() {
  const benefitsListData = [
    {
      title: "Avoid Overspending",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Emergency Savings",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Financial Planning",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Pay off Debts",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="p-5 bg-light">
      <h2 className="text-center mb-5">
        <i>Why Should You Budget?</i>
      </h2>

      {benefitsListData.map((benefit) => (
        <>
          <div
            className="row d-flex justify-content-center mb-5"
            style={{ fontFamily: "impact" }}
          >
            <div className="col-md-3 align-items-center mr-0 mb-4">
              <Checkmark size="xxLarge" color="#223344" />
            </div>
            <div className="col-md-0 mr-4">
              <h1 className="text-center">{benefit.title}</h1>
              <p className="text-center">{benefit.text}</p>
            </div>
          </div>
        </>
      ))}
      <div className="text-center">
        <h1 className="mb-5">
          <i>and many more...</i>
        </h1>

        <Button
          className="bg-light hover-primary"
          size="lg"
          style={{
            borderColor: "#223344",
            color: "#223344",
          }}
        >
          Start Budgeting
        </Button>
      </div>
    </div>
  );
}
