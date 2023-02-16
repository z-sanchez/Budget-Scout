import { LinearProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GREY, LIGHT_GREY } from "../utils/constants";
import { type BudgetStatusProps } from "../utils/types";

const BudgetStatus = ({
  budgetAmount,
  budgetBalance,
  color,
  name,
  className,
}: BudgetStatusProps) => {
  const percentage = (100 / budgetAmount) * budgetBalance;

  const theme = createTheme({
    components: {
      MuiLinearProgress: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === "determinate" &&
              ownerState.color === "primary" && {
                backgroundColor: LIGHT_GREY,
                borderRadius: "2rem",
                height: "7px",
              }),
          }),
          bar1Determinate: {
            backgroundColor: color,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        className={`my-2  cursor-pointer ${className ? className : "w-2/5"}`}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="2xl:text-xl">{name}</p>
          <p
            className="poppinsFont text-sm font-light 2xl:text-base"
            style={{ color: GREY }}
          >
            {budgetBalance} / {budgetAmount}
          </p>
        </div>
        <LinearProgress
          className=""
          color="primary"
          value={percentage}
          variant="determinate"
        ></LinearProgress>
      </div>
    </ThemeProvider>
  );
};

export { BudgetStatus };
