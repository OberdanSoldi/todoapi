import express from 'express';
import query from '../../db/index.js';

const router = express.Router();

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		let sql = `DELETE FROM todo WHERE id = ${id}`;
		const { rows } = await query(sql);
		res.status(200).json({
			status: 'success',
			code: 200,
			data: rows
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
