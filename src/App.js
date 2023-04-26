import React, { useState } from "react";
import { Container, Stack, Button } from "react-bootstrap";
import { Checkmark } from "react-checkmark";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import ViewExpensesModal from "./components/ViewExpensesModal";
import BudgetCard from "./components/BudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard ";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./context/BudgetContext";
import Benefits from "./components/Benefits";
import piggy from "./images/piggybank.png";
import save from "./images/saveimg.svg";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  return (
    <>
      <section className="bg-light overflow-hidden">
        {/* if no info added yet, use this homepage */}
        {/* Welcome page */}
        {/* If theres already info stored use this */}

        {/* make top a navbar component...fixed-top */}
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
              <i>Penny Pincher</i>
            </h1>
            <Button
              // variant="primary"
              style={{ backgroundColor: "#223344" }}
              onClick={() => setShowAddBudgetModal(true)}
            >
              Add Budget
            </Button>
            <Button variant="outline-primary" onClick={openAddExpenseModal}>
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

        {/* notification bar */}

        <section>
          <div
            className="text-white text-center py-1 w-100"
            style={{ backgroundColor: "#2256e8" }}
          >
            <h6>
              See why Penny Pincher is the #1 budgeting tool{" "}
              <a href="" className="text-white">
                See Reviews
              </a>
            </h6>
          </div>

          {/* Hero only to be shown if no budgets */}

          <div
            className="p-6 d-flex justify-content-center row "
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
                marginBottom: "200px",
              }}
            >
              <h1
                className="mb-3 display-1"
                style={{
                  fontFamily: "impact",
                }}
              >
                <i>Monitor your funds</i>
              </h1>
              <h4
                className="mb-3 display-4"
                style={{
                  fontFamily: "impact",
                }}
              >
                <i>Maximize your F U N</i>
              </h4>
              <button
                className="btn btn-lg"
                style={{
                  backgroundColor: "#cee2eb",
                  borderColor: "#223344",
                  font: "#223344",
                }}
                href=""
                role="button"
              >
                Start Budgeting
              </button>
            </div>
            {/* <div className="col-md-3 align-self-center m-5 text-center">
              <img src={save} alt="Piggy Bank" height="300px" style={{}} />
            </div> */}
          </div>

          {/* Benefits */}
          <Benefits />
        </section>
      </section>
    </>
  );
}

export default App;
