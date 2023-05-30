import React from "react";
import { Checkmark } from "react-checkmark";
import { Button } from "react-bootstrap";
import Articles from "./Articles";

export default function Benefits({ budgets }) {
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

  if (budgets.length === 0)
    return (
      <div className="bg-light overflow-hidden">
        <h2
          className="text-center mb-5 p-5 text-secondary"
          style={{ fontFamily: "impact", color: "#223344" }}
        >
          Why Use Penny Pincher?
        </h2>
        <div className="container">
          {benefitsListData.map((benefit, i) => {
            if (i % 2 === 0) {
              return (
                <div
                  className="row d-flex justify-content-center mb-5"
                  style={{ fontFamily: "impact" }}
                >
                  <div className="col-md-4 p-0 mb-4">
                    <Checkmark size="xxLarge" color="grey" />
                  </div>
                  <div className="col-md-4">
                    <h2 className="text-center">{benefit.title}</h2>
                    <p className="text-center">{benefit.text}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="container row d-flex justify-content-center mb-5"
                  style={{ fontFamily: "impact" }}
                >
                  <div className="col-md-4 mr-4">
                    <h2 className="text-center">{benefit.title}</h2>
                    <p className="text-center">{benefit.text}</p>
                  </div>
                  <div className="col-md-4 mr-0 mb-4">
                    <span className="my-auto">
                      <Checkmark size="xxLarge" color="grey" />
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="text-center mb-4">
          <Articles />
          <Button
            className="bg-light hover-primary"
            size="lg"
            style={{
              borderColor: "#223344",
              color: "#223344",
            }}
            href="https://tenor.com/view/i-was-just-kidding-ralphie-a-christmas-story-just-joking-jk-gif-19563279"
            target="_blank"
            rel="noreferrer"
          >
            Blogs
          </Button>
        </div>
      </div>
    );
}
