// import React from "react";
// import BudgetCard from "./BudgetCard";
import React, { useState } from "react";
import { Container, Stack, Button } from "react-bootstrap";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";
import ViewExpensesModal from "./ViewExpensesModal";
import BudgetCard from "./BudgetCard";
import TotalBudgetCard from "./TotalBudgetCard";
import UncategorizedBudgetCard from "./UncategorizedBudgetCard ";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/BudgetContext";
import piggy from "../images/piggybank.png";
import ReviewsBar from "./ReviewsBar";
import GetStartedModal from "./GetStartedModal";
import Home from "./SignedIn/Home";

const NavBar = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  function openGetStartedModal() {
    setShowGetStartedModal(true);
  }

  return (
    <section className="bg-light overflow-hidden fixed-top d-block">
      {/* if no info added yet, use this homepage */}
      {/* Welcome page */}
      {/* If theres already info stored use this */}

      {/* make top a navbar component...fixed-top */}

      {budgets.length === 0 ? (
        <>
          <div>
            <Container className="my-4">
              <Stack direction="horizontal" gap="2" className="mb-4">
                <h1
                  className="me-auto font-family-impact"
                  style={{
                    fontFamily: "impact",
                  }}
                >
                  <img
                    src={piggy}
                    alt="Piggy Bank"
                    height="30px"
                    style={{ marginRight: "10px" }}
                  />
                  <em>Penny Pincher</em>
                </h1>

                {/* <------ Not Needed ------> */}
                <Button
                  // variant="primary"
                  style={{ backgroundColor: "#223344" }}
                  onClick={() => setShowAddBudgetModal(true)}
                >
                  Get Started --ADD Budget
                </Button>
                {/* <--------------------------> */}

                <Button
                  variant="outline-primary"
                  style={{ color: "#223344" }}
                  onClick={() => setShowGetStartedModal(true)}
                >
                  Get Started
                </Button>
              </Stack>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <UncategorizedBudgetCard
                  onAddExpenseClick={openAddExpenseModal}
                  onViewExpensesClick={() =>
                    setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
                  }
                />
                <TotalBudgetCard />
              </div>
            </Container>

            <GetStartedModal
              show={showGetStartedModal}
              handleClose={() => setShowGetStartedModal(false)}
            />

            {/* ---- DO NOT NEED  ---- */}
            <AddBudgetModal
              show={showAddBudgetModal}
              handleClose={() => setShowAddBudgetModal(false)}
              // -------------------------
            />
          </div>
          <ReviewsBar />
        </>
      ) : (
        <div>
          <Container className="my-4">
            <Stack direction="horizontal" gap="2" className="mb-4">
              <h1
                className="me-auto font-family-impact"
                style={{
                  fontFamily: "impact",
                }}
              >
                <img
                  src={piggy}
                  alt="Piggy Bank"
                  height="30px"
                  style={{ marginRight: "10px" }}
                />
                <em>Existing Budget</em>
              </h1>
              <Button
                // variant="primary"
                style={{ backgroundColor: "#223344" }}
                onClick={() => setShowAddBudgetModal(true)}
              >
                Add Budget
              </Button>
              <Button
                variant="outline-primary"
                style={{ color: "#223344" }}
                onClick={openAddExpenseModal}
              >
                Add Expense
              </Button>
            </Stack>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              {budgets.map((budget) => {
                const amount = getBudgetExpenses(budget.id).reduce(
                  (total, expense) => total + expense.amount,
                  0
                );
                return (
                  <>
                    <BudgetCard
                      key={budget.id}
                      name={budget.name}
                      amount={amount}
                      max={budget.max}
                      onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                      onViewExpensesClick={() =>
                        setViewExpensesModalBudgetId(budget.id)
                      }
                    />
                    {console.log(budget)}
                  </>
                );
              })}
              <UncategorizedBudgetCard
                onAddExpenseClick={openAddExpenseModal}
                onViewExpensesClick={() =>
                  setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
                }
              />
              <TotalBudgetCard />
            </div>
          </Container>

          <AddBudgetModal
            show={showAddBudgetModal}
            handleClose={() => setShowAddBudgetModal(false)}
          />
          <AddExpenseModal
            show={showAddExpenseModal}
            defaultBudgetId={addExpenseModalBudgetId}
            handleClose={() => setShowAddExpenseModal(false)}
          />
          <ViewExpensesModal
            budgetId={viewExpensesModalBudgetId}
            handleClose={() => setViewExpensesModalBudgetId()}
          />
          <Home />
        </div>
      )}

      {/* notification bar */}
    </section>
  );
};

export default NavBar;
