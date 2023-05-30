import React, { useState } from "react";
import TotalBudgetCard from "../TotalBudgetCard";
import BudgetCard from "../BudgetCard";
import UncategorizedBudgetCard from "../UncategorizedBudgetCard ";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../../context/BudgetContext";
import { Container } from "react-bootstrap";
import Budgets from "./Budgets";
import BudgetPie from "./BudgetPie";

const Home = () => {
  // Buttons not working
  //remove budget from nav bar after complete

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
      <Container className="my-4">
        {/* NAV */}
        {/* Budget Graph */}
        {/* Show Budget Cards */}

        {/* <Budgets
          budgets={budgets}
          viewExpensesModalBudgetId={viewExpensesModalBudgetId}
          addExpenseModalBudgetId={addExpenseModalBudgetId}
          openAddExpenseModal={openAddExpenseModal}
        /> */}
      </Container>
      <BudgetPie />
      {/* pass in budgets */}
      {/* Add Credit Card Debt and pay off calc --using interest */}
    </div>
  );
};

export default Home;
