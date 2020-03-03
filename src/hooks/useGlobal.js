import globalHook from "use-global-hook"
import globalInitialState from "../store/globalInitialState"
import React from "react"
import globalActions from "../store/globalActions"

const useGlobal = globalHook(React, globalInitialState, globalActions)

export default useGlobal
