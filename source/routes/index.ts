import express from "express"

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
    res.send({
        message: "I AM THE SERVER",
    })
})

//const gameEngine = require('./controller/gameEngine.ts');
/**
 *  GET monster
 */
router.get('/monsters', (req, res) => {
    res.send({
        monsters: ['spider', 'snake', 'ghost'],
    })
})

/**
 * Get item
 */
router.get('/item', (req, res) => {
    res.send({
        monsters: ['sword', 'spear', 'Human_sarcrifice_knife'],
    })
})

export default router
