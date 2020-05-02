const actions = {
  setCurrentPosition: (store, currentPosition) => {
    store.setState({ currentPosition })
  },
  setParkingsData: (store, parkingsData) => {
    store.setState({ parkingsData })
  },
  setLoading: (store, loading) => {
    store.setState({ loading })
  },
  setCurrentParkingReportingData: (store, currentParkingReportingData) => {
    store.setState({ currentParkingReportingData })
  },
}

export default actions
