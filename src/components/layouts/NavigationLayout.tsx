import { type ReactNode } from "react";
import type { NextPageWithLayout } from "../../pages/_app";
import BugdetScoutLogo from "../../../public/budget-scout-logo.svg";
import HomeIcon from "../../../public/home-icon.svg";
import BudgetIcon from "../../../public/budget-icon.svg";
import GoalsIcon from "../../../public/goals-icon.svg";
import IncomeSpendingIcon from "../../../public/income-spending-icon.svg";
import AccountManagementIcon from "../../../public/account-management-icon.svg";
import SignOutIcon from "../../../public/sign-out-icon.svg";
import { NavLink } from "../NavLink";
import { NavUser } from "../NavUser";
import { DASHBOARD_PATH, GREY } from "../../utils/constants";
import { useRouter } from "next/router";
import Head from "next/head";

const NavigationLayout: NextPageWithLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap')`}
        </style>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700&display=swap')`}
        </style>
      </Head>
      <div className="grid  min-w-[1340px] grid-cols-[350px_auto]">
        <div className="col-span-1 flex max-h-screen min-h-[820px] flex-row ">
          <div className="px-auto flex w-full flex-col items-center py-16">
            <BugdetScoutLogo alt="budget scout logo" />

            <div className="my-auto">
              <NavLink
                Icon={HomeIcon as string}
                name="Home"
                linkActive={pathname === DASHBOARD_PATH}
              />
              <NavLink Icon={BudgetIcon as string} name="Budget" />
              <NavLink Icon={GoalsIcon as string} name="Goals" />
              <NavLink
                Icon={IncomeSpendingIcon as string}
                name="Income/Spending"
              />
              <NavLink
                Icon={AccountManagementIcon as string}
                name="Account Management"
              />
            </div>

            <div className="flex w-3/4 flex-col justify-center">
              <NavUser />
              <div className="mx-auto mt-5 flex w-2/5 cursor-pointer items-center justify-between">
                <SignOutIcon />
                <p style={{ color: GREY }}>Logout</p>
              </div>
            </div>
          </div>
          <div className="h-[95%] w-[2px] self-center bg-slate-100"></div>
        </div>
        {children}
      </div>
    </>
  );
};

export default NavigationLayout;
