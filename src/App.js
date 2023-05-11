import React, { useState } from "react";

import { useBudgets } from "./context/BudgetContext";
import Benefits from "./components/Benefits";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

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
      <section>
        <NavBar
          showAddBudgetModal={showAddBudgetModal}
          budgets={budgets}
          viewExpensesModalBudgetId={viewExpensesModalBudgetId}
          addExpenseModalBudgetId={addExpenseModalBudgetId}
          openAddExpenseModal={openAddExpenseModal}
        />
        {/* <> */}
        {/* showAddBudgetModal, budgets, viewExpensesModalBudgetId, addExpenseModalBudgetId, budgets, openAddExpenseModal
      /> */}
        {/* Hero only to be shown if no budgets */}
        {/* {budgets.length === 0 ? (
            <>
            
              <div
                className="text-white text-center py-1 w-100"
                style={{ backgroundColor: "#2256e8" }}
              >
                <h6>
                  See why Penny Pincher is the #1 budgeting tool{" "}
                  <a href="https://tenor.com/view/i-was-just-kidding-ralphie-a-christmas-story-just-joking-jk-gif-19563279" target="_blank" rel="noreferrer" className="text-white">
                    See Reviews
                  </a>
                </h6>
              </div> */}
        {console.log(budgets)}
        <Hero openAddExpenseModal={openAddExpenseModal} budgets={budgets} />
        <Benefits budgets={budgets} />
        {/* </>
          ) : (
            <div></div>
          )} */}
        {/* Benefits */}

        {/* ADD FOOTER */}
      </section>
      {/* </section> */}
    </>
  );
}

export default App;
