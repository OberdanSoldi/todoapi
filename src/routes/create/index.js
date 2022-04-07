import express from 'express';
import query from '../../db/index.js';

const router = express.Router();

router.post('/', async (req, res) => {
	const { todo } = req.body;
	try {
		let sql = `INSERT INTO todo (todo) VALUES ('${todo}')`;
		const results = await query(sql);
		res.status(200).json({
			status: 'success',
			code: 200,
			data: results
		});
	} catch (e) {
		res.status(500).json({
			status: 'error',
			code: 500,
			message: e.message
		});
	}
});

export default router;
