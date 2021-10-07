import axios from 'axios'

// const production = '/'
// const development = 'http://localhost:5000/'
// const url = process.env.NODE_ENV ? production : development

const url = 'http://localhost:5000/'

const api = axios.create({
	baseURL: url,
})

export const addDesign = (payload) => api.post(`/editor/design/add`, payload)
export const getDesignById = (id) => api.get(`/editor/design/${id}`)
export const updateDesign = (id, payload) =>
	api.put(`/editor/design/${id}`, payload)

const apis = {
	addDesign,
	getDesignById,
	updateDesign,
}

export default apis
