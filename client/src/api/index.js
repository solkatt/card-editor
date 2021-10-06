import axios from 'axios'

// const production = '/'
// const development = 'http://localhost:5000/'
// const url = process.env.NODE_ENV ? production : development

const url = 'http://localhost:5000/'

const api = axios.create({
	baseURL: url,
})

export const addDesign = (payload) => api.post(`/editor/design/add`, payload)

const apis = {
	addDesign,
}

export default apis
