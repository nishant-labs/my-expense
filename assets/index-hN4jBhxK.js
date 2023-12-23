import { j as jsxRuntimeExports, L as ListGroup, l as Stack, m as Card, r as reactExports, A as Alert, n as Row, o as Col, p as Tabs, q as Tab } from "./vendor-5_Ts9y2q.js";
import { u as useTransactions, t as transformTransactionBySource, a as transformedTransactionAggregator, M as MONTH_NAMES } from "./TransactionUtils-kzmt8pfK.js";
import { f as formatNumberAsCurrency, u as useSourceSettings } from "./useSourceSettings-3hD7aP9K.js";
import "./index-sHCNIenN.js";
import "./defineProperty--9rtS8ml.js";
const ExpenseCategory = ({ transaction }) => {
  const amount = formatNumberAsCurrency(transaction.amount, false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroup.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "horizontal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: transaction.groupName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: amount })
  ] }) });
};
const ExpenseDetails = ({ transactionList }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroup, { variant: "flush", children: transactionList.map((transaction, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseCategory, { transaction }, `ec-${index}`)) });
const TransactionHighlights = ({ title, total, transactions }) => {
  const formattedTotal = formatNumberAsCurrency(total, false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card.Body, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Title, { className: "text-black-50", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Body, { className: "p-1 display-6", children: formattedTotal }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseDetails, { transactionList: transactions })
  ] }) });
};
const ExpenseSummary = ({ year, month }) => {
  const { transactions } = useTransactions(year, month);
  const { sourceList } = useSourceSettings();
  const income = reactExports.useMemo(() => {
    const incomeSource = sourceList.filter((source) => !source.isExpense);
    return transformTransactionBySource(transactions, incomeSource, "account");
  }, [sourceList, transactions]);
  const accountExpense = reactExports.useMemo(() => {
    const expenseSource = sourceList.filter((source) => source.isExpense);
    return transformTransactionBySource(transactions, expenseSource, "account");
  }, [sourceList, transactions]);
  const creditCardExpense = reactExports.useMemo(() => {
    const expenseSource = sourceList.filter((source) => source.isExpense);
    return transformTransactionBySource(transactions, expenseSource, "creditCard");
  }, [sourceList, transactions]);
  const savedAmount = reactExports.useMemo(() => {
    const totalIncome = transformedTransactionAggregator(income);
    const totalExpense = transformedTransactionAggregator(accountExpense);
    return totalIncome + totalExpense;
  }, [accountExpense, income]);
  if (transactions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "warning", children: "Transaction Missing, please upload for the month" });
  }
  const credit = `You have saved ${formatNumberAsCurrency(savedAmount)} this month`;
  const deficit = `You have spend ${formatNumberAsCurrency(savedAmount)} more than you income`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: savedAmount > 0 ? "primary" : "warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: savedAmount > 0 ? credit : deficit }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-cols-3", children: [
      income.map(({ title, total, transactions: transactions2 }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransactionHighlights, { title, total, transactions: transactions2 }) }, `income-${index}`)),
      accountExpense.map(({ title, total, transactions: transactions2 }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransactionHighlights, { title, total, transactions: transactions2 }) }, `acc-exp-${index}`)),
      creditCardExpense.map(({ title, total, transactions: transactions2 }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransactionHighlights, { title, total, transactions: transactions2 }) }, `card-exp-${index}`))
    ] })
  ] });
};
const [_, ...monthNames] = MONTH_NAMES;
const Home = () => {
  const [key, setKey] = reactExports.useState(monthNames[0].label.toLowerCase());
  const { month, year } = reactExports.useMemo(() => {
    const todaysDate = /* @__PURE__ */ new Date();
    return {
      month: todaysDate.getMonth(),
      year: todaysDate.getFullYear().toString()
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Monthly Expense Report" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { id: "controlled-tab-example", activeKey: key, onSelect: (k) => setKey(k), className: "mb-3", children: monthNames.map(({ label, value }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tab,
      {
        eventKey: label.toLowerCase(),
        title: label,
        disabled: index > month,
        mountOnEnter: true,
        unmountOnExit: true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseSummary, { month: value, year })
      },
      value
    )) })
  ] });
};
export {
  Home as default
};
