import React from "react"
import renderer from "react-test-renderer"
import { RecoilRoot } from "recoil"
import { Header } from "."

describe("<Header /> container", () => {
  it("should render", () => {
    const tree = renderer
      .create(
        <RecoilRoot>
          <Header />
        </RecoilRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
