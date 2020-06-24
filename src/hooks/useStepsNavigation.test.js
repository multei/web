import React from "react"

import { useStepsNavigation } from "./useStepsNavigation"

describe("useStepsNavigation", () => {
  const maxSteps = 3
  const mockSetActiveStepIndex = jest.fn()
  const mockSetTransitionDirection = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [1, mockSetActiveStepIndex])
      .mockImplementationOnce(() => ["left", mockSetTransitionDirection])
  })

  it("should go to the next step", () => {
    const { handleNext } = useStepsNavigation(maxSteps)

    handleNext()

    expect(mockSetActiveStepIndex).toHaveBeenCalledTimes(1)
  })

  it("should set transition direction left", () => {
    const { handleNext } = useStepsNavigation(maxSteps)

    handleNext()

    expect(mockSetTransitionDirection).toHaveBeenCalledWith("left")
  })

  it("should back the step", () => {
    const { handleBack } = useStepsNavigation(maxSteps)

    handleBack()

    expect(mockSetActiveStepIndex).toHaveBeenCalledTimes(1)
  })

  it("should set transition direction right", () => {
    const { handleBack } = useStepsNavigation(maxSteps)

    handleBack()

    expect(mockSetTransitionDirection).toHaveBeenCalledWith("right")
  })

  it("should keep in the same step", () => {
    jest
      .spyOn(React, "useState")
      .mockReset()
      .mockImplementationOnce(() => [0, mockSetActiveStepIndex])
      .mockImplementationOnce(() => ["left", mockSetTransitionDirection])

    const { handleBack } = useStepsNavigation(maxSteps)

    handleBack()

    expect(mockSetActiveStepIndex).toHaveBeenCalledTimes(0)
  })
})
