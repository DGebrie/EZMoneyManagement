import React, { useState } from "react";

import { useBudgets } from "../context/BudgetContext";
import Benefits from "./Benefits";

import Hero from "./Hero";
import NavBar from "./NavBar";

import Footer from "./Footer";

const Landing = () => {
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
      <section className="bg-light">
        <NavBar
          showAddBudgetModal={showAddBudgetModal}
          budgets={budgets}
          viewExpensesModalBudgetId={viewExpensesModalBudgetId}
          addExpenseModalBudgetId={addExpenseModalBudgetId}
          openAddExpenseModal={openAddExpenseModal}
        />

        <Hero openAddExpenseModal={openAddExpenseModal} budgets={budgets} />
        <Benefits budgets={budgets} />

        <Footer />
      </section>
    </>
  );
};

export default Landing;
