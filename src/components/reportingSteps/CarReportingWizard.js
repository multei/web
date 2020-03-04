import React from "react"

import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import MobileStepper from "@material-ui/core/MobileStepper"
import Step from "@material-ui/core/Step"
import Stepper from "@material-ui/core/Stepper"
import StepLabel from "@material-ui/core/StepLabel"

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import Typography from "@material-ui/core/Typography"
import StepContent from "@material-ui/core/StepContent"

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
  const backButton = (
    <Button disabled={activeStep === 0} onClick={onBack}>
      <KeyboardArrowLeft /> Voltar
    </Button>
  )
  const nextButton = (
    <Button color="primary" onClick={onNext} variant="contained">
      {nextButtonLabel} <KeyboardArrowRight />
    </Button>
  )
  return (
    <>
      <Hidden implementation="css" xsDown={true}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={`car-reporting-wizard-step-${index}`}>
                <StepLabel>{label}</StepLabel>
                {activeStep === index && (
                  <StepContent>
                    {activeStep > 0 && backButton}
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
