import React from "react"
import renderer from "react-test-renderer"
import { RecoilProviderWrapper } from "./index"

describe("Recoil provider wrapper", () => {
  it("should render correctly with theme", () => {
    const tree = renderer
      .create(<RecoilProviderWrapper element={<>Test element</>} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
