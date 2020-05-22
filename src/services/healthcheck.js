import Api from "../api"

export const getHealthCheckResponse = () => Api().get("/health-check")
