const actions = {
  setParkingsData: (store, parkingsData) => {
    store.setState({ parkingsData: parkingsData })
  },
  setLoading: (store, loading) => {
    store.setState({ loading: loading })
  },
  setCurrentParkingReportingData: (store, parkingReportData) => {
    store.setState({ currentParkingReportingData: parkingReportData })
  },
}

export default actions
