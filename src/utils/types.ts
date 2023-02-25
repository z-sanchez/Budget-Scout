export type BudgetStatusProps = {
  budgetAmount: number;
  budgetBalance: number;
  color: string;
  name: string;
  className?: string;
};

export type BudgetStatusDetailedProps = {
  budgetAmount: number;
  budgetBalance: number;
  color: string;
  name: string;
  message: string;
  edit: boolean;
  accounts: { accountName: string; id: number }[];
  longTerm?: boolean;
  className?: string;
};

export type LongTermGoalStatusProps = {
  budgetAmount: number;
  budgetBalance: number;
  color: string;
  name: string;
  priority: number;
};

export interface WeeklySpendingBlockProps {
  budgetStatusData: BudgetStatusProps[];
}

export type WeeklySpendingTransactionLineProps = {
  Icon: any;
  transactionName: string;
  transactionDate: string;
  transactionTime: string;
  transactionUser: string;
  transactionAmount: number;
};
