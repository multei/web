import axios from "axios"

export default function api() {
  const baseURL = process.env.GATSBY_MULTEI_API_BASEURL

  if (typeof baseURL === "undefined") {
    throw new Error(
      "Can not make requests to API. API base URL is not defined."
    )
  }

  return axios.create({
    baseURL: `${baseURL}/v1`,
  })
}
