import React from "react";
import { Button } from "react-bootstrap";

const Hero = ({ openAddExpenseModal, budgets }) => {
  if (budgets.length === 0)
    return (
      <>
        <div
          className="p-3 d-flex justify-content-center row "
          style={{
            backgroundColor: "#cee2eb",
            font: "#223344",
          }}
        >
          <div
            className="font-weight-bold col-md-6 text-center "
            style={{
              color: "#223344",
              marginTop: "200px",
              marginBottom: "100px",
            }}
          >
            <h1
              className="mb- display-1"
              style={{
                fontFamily: "impact",
              }}
            >
              <em>Manage your funds</em>
            </h1>
            <h4
              className="mb-3 display-4"
              style={{
                fontFamily: "impact",
              }}
            >
              <em>Maximize your F U N</em>
            </h4>

            <Button
              className="mr-4"
              size="lg"
              style={{
                backgroundColor: "#cee2eb",
                borderColor: "#223344",
                color: "#223344",
              }}
              onClick={openAddExpenseModal}
            >
              Start Budgeting
            </Button>
          </div>
        </div>
      </>
    );
};

export default Hero;
