import * as requestService from '../../utilities/cars-api'

import { useState } from 'react'
import * as usersService from '../../utilities/users-service'

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        Make: '',
        Model: ''
    })
    const [error, setError] = useState('')

    function handleChange(evt) {
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value
        })
    }

    async function handleSubmit(evt) {
        // prevent form from being submitted to the server
        evt.preventDefault()
        try {
            const user = await requestService.addCar(credentials)
        } catch(err) {
            setError('Log in failed - Try Again')
        }
    }

  return (
    <div>
      <div className="requestForm">
        <form autoComplete="off" onSubmit={handleSubmit} >
          <label>Make</label>
          <input
            type="text"
            name="Make"
            value={credentials.Make}
            onChange={handleChange}
            required
          />
          <label>Model</label>
          <input
            type="text"
            name="Model"
            value={credentials.Model}
            onChange={handleChange}
            required
          />
            <label>Model Year</label>
          <input
            type="text"
            name="Year"
            value={credentials.Year}
            onChange={handleChange}
            required
          />
          <button type="submit">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}