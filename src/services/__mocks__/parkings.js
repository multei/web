const resolvedValue = {
  status: 'success',
  data: {
    data: { 
      uuid: 'uuid',
      parkings: {
        'car_plate': 'car_plate'
      }
    }
  }
}

const rejectedValue = {
  status: 'error',
  error: {}
}

export const createParkingReport = (parkingReportState, version = 1) => new Promise(resolve => resolve(resolvedValue), reject => reject(rejectedValue));