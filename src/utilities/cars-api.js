import {sendRequest} from "./users-api"

export function addCar(credentials) {
    return sendRequest(`/api/car`, 'POST', credentials);
  }

export function deleteCar(_id) {
  return sendRequest('/api/car', 'DELETE', _id)
}

export function getAll() {
  return sendRequest('/api/car', 'GET')
}