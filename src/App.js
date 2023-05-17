import React, { useState } from "react";

import { useBudgets } from "./context/BudgetContext";
import Benefits from "./components/Benefits";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Home from "./components/SignedIn/Home";

import Articles from "./components/Articles";
import GraphPie from "./components/GraphPie";
import Footer from "./components/Footer";

// Add blogs, financial literacy
// FUTURE: Add Graph when budgets exist

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
      <section className="">
        <NavBar
          showAddBudgetModal={showAddBudgetModal}
          budgets={budgets}
          viewExpensesModalBudgetId={viewExpensesModalBudgetId}
          addExpenseModalBudgetId={addExpenseModalBudgetId}
          openAddExpenseModal={openAddExpenseModal}
        />
        {/* <Home /> */}
        <Hero openAddExpenseModal={openAddExpenseModal} budgets={budgets} />

        <Benefits budgets={budgets} />
        <Footer />
      </section>
    </>
  );
}

export default App;
