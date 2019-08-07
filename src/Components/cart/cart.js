import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

import UserInformation from "./cartSteppers/userInformation";
import Payment from "./cartSteppers/payment";
import CartItems from "./cartSteppers/cartItems";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    background: "#00334e",
    color: "white"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  CartHeader: {
    width: "fit-content",
    color: "#00334e",
    margin: "3vh auto"
  },
  buttonContainer: {
    width: "fit-content",
    margin: "2vh auto"
  },
  EmptyCart: {
    marginTop: "10vh",
    marginLeft: "23vh",
    color: "#00334e",
    marginBottom: "50vh"
  }
}));

function getSteps() {
  return ["Selected items", "User Information", "Payment and Shipment"];
}

function getStepContent(stepIndex, data) {
  switch (stepIndex) {
    case 0:
      return <CartItems data={data} />;
    case 1:
      return <UserInformation />;
    case 2:
      return <Payment />;
    default:
      return "Uknown stepIndex";
  }
}

export default function Cart(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  if (props.data) {
    return (
      <div className={classes.root}>
        <h1 className={classes.CartHeader}>Cart</h1>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel className="stepper_text">{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <h2 className={classes.EmptyCart}>Transaction Completed !</h2>
            </div>
          ) : (
            <div>
              <div className={classes.instructions}>
                {getStepContent(activeStep, props.data)}
              </div>
              <div className={classes.buttonContainer}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className={classes.CartHeader}>Cart</h1>
        <h2 className={classes.EmptyCart}>No Selected Items !</h2>
      </div>
    );
  }
}
