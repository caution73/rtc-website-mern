import * as requestService from '../../utilities/cars-api'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import * as usersService from '../../utilities/users-service'

export default function RequestForm({user}) {
  const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        Make: '',
        Model: '',
        Year: '',
        Subject: '',
        Notes: '',
        UserEmail: user.email
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
            const car = await requestService.addCar(credentials)
            navigate('/')
        } catch(err) {
            setError('Request failed - Try Again')
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
            <label>What particular feature of this car do you want to have us cover?</label>
          <input
            type="text"
            name="Subject"
            value={credentials.Subject}
            onChange={handleChange}
            required
          />
            <label>Do you or someone you know own or have access to one of these cars? Please explain</label>
          <input
            type="text"
            name="Notes"
            value={credentials.Notes}
            onChange={handleChange}
            required
          />
          <button type="submit" id="requestSubmitBtn">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}