import express from 'express';
import query from '../../db/index.js';

const router = express.Router();

router.patch('/', async (req, res) => {
	try {
		const { id, todo } = req.body;
        let sql = `UPDATE todo SET todo = '${todo}' WHERE id = ${id}`;
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
