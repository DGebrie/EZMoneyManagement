import React from "react";
import { Button } from "react-bootstrap";
import GraphPie from "./GraphPie";

const Hero = ({ openAddExpenseModal, budgets }) => {
  if (budgets.length === 0)
    return (
      <>
        <div
          className="d-flex justify-content-center row overflow-hidden align-items-cente text-center"
          style={{
            backgroundColor: "#cee2eb",
            font: "#223344",
            paddingTop: "65px",
          }}
        >
          <div
            className="font-weight-bold col-md-4 align-content-center"
            style={{
              color: "#223344",
              marginTop: "200px",
            }}
          >
            <h3
              className="display-3 text-shadow"
              style={{
                fontFamily: "impact",
              }}
            >
              <em>Manage your funds</em>
            </h3>
            <h3
              className="mb-3 display-4 text-shadow"
              style={{
                fontFamily: "impact",
              }}
            >
              <em>Maximize your F U N</em>
            </h3>

            <Button
              className="mr-4 shadow"
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
          <div
            className="col-md-4 d-flex align-items-center"
            style={{
              color: "#223344",
              marginTop: "150px",
              marginBottom: "50px",
            }}
          >
            <GraphPie />
          </div>
        </div>
      </>
    );
};

export default Hero;
