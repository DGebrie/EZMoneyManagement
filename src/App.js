import React, { useState } from "react";
import { Container, Stack, Button } from "react-bootstrap";
import AddBudgetModal from "./components/AddBudgetModal";
import { BudgetCard } from "./components/BudgetCard";
import { useBudgets } from "./context/BudgetContext";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const { budgets } = useBudgets();

  return (
    <>
      <Container>
        <Stack direction="horizontal" gap="2" className="my-4">
          <h1 className="mx-auto">Budget</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplaterColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map((budget) => {
            console.log(budget);
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={budget.amount}
                max={budget.max}
              />
            );
          })}

          {/* {console.log(budgets)} */}
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
    </>
  );
}

export default App;
