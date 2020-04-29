import React from "react"

import Hidden from "@material-ui/core/Hidden"
import MobileStepper from "@material-ui/core/MobileStepper"
import Step from "@material-ui/core/Step"
import Stepper from "@material-ui/core/Stepper"
import StepLabel from "@material-ui/core/StepLabel"

import Typography from "@material-ui/core/Typography"
import StepContent from "@material-ui/core/StepContent"
import BackButton from "../BackButton"
import NextButton from "../NextButton"

const CarReportingWizard = ({
  activeStep,
  children,
  maxSteps,
  onBack,
  onNext,
  steps,
}) => {
  const isLastStep = activeStep === maxSteps - 1
  const nextButtonLabel = isLastStep ? "Finalizar" : "Avançar"
  const backButton = <BackButton disabled={activeStep === 0} onClick={onBack} />
  const nextButton = <NextButton onClick={onNext}>{nextButtonLabel}</NextButton>
  return (
    <>
      <Hidden implementation="css" xsDown={true}>
        {activeStep > 0 && backButton}
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={`car-reporting-wizard-step-${index}`}>
                <StepLabel>{label}</StepLabel>
                {activeStep === index && (
                  <StepContent>
                    {children}
                    {nextButton}
                  </StepContent>
                )}
              </Step>
            )
          })}
        </Stepper>
      </Hidden>
      <Typography align="center" component="div">
        <Hidden implementation="js" smUp={true}>
          {children}
        </Hidden>
      </Typography>
      <Hidden implementation="css" smUp={true}>
        <MobileStepper
          activeStep={activeStep}
          backButton={backButton}
          nextButton={nextButton}
          steps={maxSteps}
        />
      </Hidden>
    </>
  )
}

export default CarReportingWizard
