const Design = require('../models/designModel')

createDesign = (req, res) => {
	const body = req.body

	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a design',
		})
	}

	const design = new Design(body)

	if (!design) {
		return res.status(400).json({
			success: false,
			error: err,
		})
	}

	design
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: design._id,
				message: 'Design created!',
			})
		})
		.catch((error) => {
			return res.status(400).json({
				error,
				message: 'Design not created!',
			})
		})
}

getDesignById = async (req, res) => {
	await Design.findOne(
		{
			_id: req.params.id,
		},
		(err, design) => {
			if (err) {
				return res.status(400).json({
					success: false,
					error: err,
				})
			}

			if (!design) {
				return res.status(404).json({
					success: false,
					error: `Design not found`,
				})
			}
			return res.status(200).json({
				success: true,
				data: design,
			})
		}
	)
		.clone()
		.catch((err) => console.log(err))
}

updateDesign = async (req, res) => {
	const { designContent } = req.body

	if (!designContent) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a design to update',
		})
	}

	Design.findOne(
		{
			_id: req.params.id,
		},
		(err, design) => {
			if (err) {
				return res.status(404).json({
					err,
					message: 'Design not found!',
				})
			}

			design.designContent = designContent
			design
				.save()
				.then(() => {
					return res.status(200).json({
						success: true,
						id: design._id,
						message: 'Design updated!',
					})
				})
				.catch((error) => {
					return res.status(404).json({
						error,
						message: 'Design not updated!',
					})
				})
		}
	)
}

getAllDesigns = async (req, res) => {
	await Design.find({}, (err, designs) => {
		if (err) {
			return res.status(400).json({
				success: false,
				error: err,
			})
		}
		if (!designs.length) {
			return res.status(404).json({
				success: false,
				error: `No Designs found`,
			})
		}
		return res.status(200).json({
			success: true,
			data: designs,
		})
	})
		.clone()
		.catch((err) => console.log(err))
}

module.exports = {
	createDesign,
	getDesignById,
	updateDesign,
	getAllDesigns,
}
