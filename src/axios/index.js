import axios from 'axios'

export const fetch = axios.create({
  baseURL:
    'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest',
})
