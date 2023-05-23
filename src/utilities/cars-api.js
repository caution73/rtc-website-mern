import {sendRequest} from "./users-api"

export function addCar(credentials) {
    return sendRequest(`/api/car`, 'POST', credentials);
  }