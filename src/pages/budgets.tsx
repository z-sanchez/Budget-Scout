import { DashboardHeader } from "../components/DashboardHeader";
import NavigationLayout from "../components/layouts/NavigationLayout";
import { LineGraph } from "../components/Dashboard/LineGraph/LineGraph";
import { LongTermGoals } from "../components/Dashboard/LongTermGoals/LongTermGoals";
import { RecentActivity } from "../components/Dashboard/RecentActivity/RecentActivity";
import { WeeklySpendingBlock } from "../components/Dashboard/WeeklySpending/WeeklySpendingBlock";
import { BLUE, GREEN, GREY, RED, YELLOW } from "../utils/constants";
import { type BudgetStatusProps } from "../utils/types";
import { type NextPageWithLayout } from "./_app";
import DropdownIcon from "../../public/dropdown-icon.svg";
import { AccountsBlock } from "../components/Dashboard/AccountBalances/AccountsBlock";
import { Collapse } from "@mui/material";
import { BudgetsSection } from "../components/Budgets/BudgetsSection/BudgetsSection";
import { IncomeSection } from "../components/Budgets/IncomeSection/IncomeSection";

const Budgets: NextPageWithLayout = () => {
  return (
    <div className="col-span-1 grid h-screen min-h-[800px] grid-cols-[100%] grid-rows-[13%_auto] gap-y-2 px-5 py-3">
      <div className="col-span-1">
        <DashboardHeader greeting="Budgets" />
      </div>
      <div className="col-span-1">
        <BudgetsSection />
        <IncomeSection />
      </div>
    </div>
  );
};

Budgets.getLayout = (page) => {
  return <NavigationLayout>{page}</NavigationLayout>;
};

export default Budgets;