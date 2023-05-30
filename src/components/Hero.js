import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GraphPie from "./GraphPie";
import AddBudgetModal from "./AddBudgetModal";
import checklist from "../images/budgetchecklist.png";

const Hero = ({ budgets }) => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);

  if (budgets.length === 0)
    return (
      <>
        <div
          className="d-flex justify-content-center row overflow-hidden bg-white w-screen h-screen"
          style={{
            // backgroundColor: "#cee2eb",
            font: "#223344",
            paddingTop: "65px",
          }}
        >
          <div
            className="font-weight-bold col-md-4 mb-4 align-content-center "
            style={{
              color: "#223344",
              marginTop: "200px",
              marginLeft: "2rem",
              marginBottom: "100px",
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
              <em>Maximize your FUN</em>
            </h3>

            <Button
              className="mr-4 shadow"
              size="lg"
              style={{
                backgroundColor: "#cee2eb",
                borderColor: "#223344",
                color: "#223344",
              }}
              onClick={() => setShowAddBudgetModal(true)}
            >
              Start Budgeting
            </Button>
          </div>
          <div
            className="col-md-4 d-xl-block d-none "
            style={{
              color: "#223344",
              marginTop: "150px",
              // marginBottom: "50px",
            }}
          >
            <img
              src={checklist}
              alt="Piggy Bank"
              className="img-fluid img"
              // height="30px"
              // style={{ marginRight: "10px" }}
            />
            {/* <GraphPie /> */}
          </div>
        </div>
        <AddBudgetModal
          show={showAddBudgetModal}
          handleClose={() => setShowAddBudgetModal(false)}
        />
      </>
    );
};

export default Hero;
