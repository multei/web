import React, { Component } from "react"
import { useStepsNavigation } from "./useStepsNavigation"
import { useActiveStepState } from "./useActiveStepState"

jest.mock("../../hooks/useParkingReportState")
jest.mock("../../hooks/useLoadingState")
jest.mock("./useActiveStepState")

describe("useStepsNavigation", () => {
  const mockHandleNext = jest.fn()
  let steps = []

  const maxSteps = 3
  const mockSetActiveStepIndex = jest.fn()
  const mockSetTransitionDirection = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    useActiveStepState.mockImplementation(() => [1, mockSetActiveStepIndex])

    jest
      .spyOn(React, "useState")
      .mockImplementation(() => ["left", mockSetTransitionDirection])
  })

  describe("Steps use default next step", () => {
    beforeAll(() => {
      steps = [
        {
          label: "Step 1",
          component: Component,
        },
        {
          label: "Step 2",
          component: Component,
        },
        {
          label: "Step 3",
          component: Component,
        },
      ]
    })

    it("should go to the next default step", () => {
      const { handleNext } = useStepsNavigation(steps, maxSteps)

      handleNext()

      expect(mockSetActiveStepIndex).toHaveBeenCalledTimes(1)
    })

    it("should set transition direction left", () => {
      const { handleNext } = useStepsNavigation(steps, maxSteps)

      handleNext()

      expect(mockSetTransitionDirection).toHaveBeenCalledWith("left")
    })

    it("should back the step", () => {
      const { handleBack } = useStepsNavigation(steps, maxSteps)

      handleBack()

      expect(mockSetActiveStepIndex).toHaveBeenCalledTimes(1)
    })

    it("should set transition direction right", () => {
      const { handleBack } = useStepsNavigation(steps, maxSteps)

      handleBack()

      expect(mockSetTransitionDirection).toHaveBeenCalledWith("right")
    })

    it("should keep in the same step", () => {
      useActiveStepState.mockImplementation(() => [0, mockSetActiveStepIndex])

      jest
        .spyOn(React, "useState")
        .mockReset()
        .mockImplementation(() => ["left", mockSetTransitionDirection])

      const { handleBack } = useStepsNavigation(steps, maxSteps)

      handleBack()

      expect(mockSetActiveStepIndex).toHaveBeenCalledTimes(0)
    })
  })

  describe("Step has own handleNext", () => {
    beforeAll(() => {
      steps = [
        {
          label: "Step 1",
          component: Component,
        },
        {
          label: "Step 2",
          component: Component,
          handleNext: mockHandleNext,
        },
        {
          label: "Step 3",
          component: Component,
        },
      ]
    })

    it("should go to the next step", () => {
      mockHandleNext.mockImplementation(async () => {})

      const { handleNext } = useStepsNavigation(steps, maxSteps)

      handleNext()

      expect(mockHandleNext).toHaveBeenCalledTimes(1)
    })
  })
})
