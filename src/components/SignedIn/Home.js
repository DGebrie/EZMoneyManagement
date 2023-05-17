import React, { useState } from "react";
import TotalBudgetCard from "../TotalBudgetCard";
import BudgetCard from "../BudgetCard";
import UncategorizedBudgetCard from "../UncategorizedBudgetCard ";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../../context/BudgetContext";

const Home = () => {
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
    <div>
      {/* NAV */}
      {/* Budget Graph */}
      {/* Show Budget Cards */}
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

      {/* Add Credit Card Debt and pay off calc --using interest */}
    </div>
  );
};

export default Home;
