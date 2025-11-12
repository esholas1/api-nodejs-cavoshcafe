import { pool } from '../db/db.js'

const getDocentes = async (req, res) => {
    const idSede = req.params.idSede
    const rows = await pool.query('call sp_getDocentes(?)', [idSede])
    return ( rows[0] )
}

