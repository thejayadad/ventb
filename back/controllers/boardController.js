const boardController = require("express").Router()
const Board = require("../models/Board")
const verifyToken = require('../middleware/verifyToken')

boardController.get('/getAll', async (req, res) => {
    try {
        const boards = await Board.find({}).populate("userId", '-password')
        return res.status(200).json(boards)
    } catch (error) {
        return res.status(500).json(error)
    }
})

boardController.get('/find/:id', async (req, res) => {
    try {
        const board = await Board.findById(req.params.id).populate("userId", '-password')
        board.views += 1
        await board.save()
        return res.status(200).json(board)
    } catch (error) {
        return res.status(500).json(error)
    }
})

boardController.get('/featured', async (req, res) => {
    try {
        const boards = await Board.find({ featured: true }).populate("userId", '-password').limit(3)
        return res.status(200).json(boards)
    } catch (error) {
        return res.status(500).json(error)
    }
})

boardController.post('/', verifyToken, async (req, res) => {
    try {
        const board = await Board.create({ ...req.body, userId: req.user.id })
        return res.status(201).json(board)
    } catch (error) {
        return res.status(500).json(error)
    }
})

boardController.put("/updateBoard/:id", verifyToken, async (req, res) => {
    try {
        const board = await Board.findById(req.params.id)
        if (board.userId.toString() !== req.user.id.toString()) {
            throw new Error("You can update only your own posts")
        }

        const updatedBoard = await Board
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .populate('userId', '-password')

        return res.status(200).json(updatedBoard)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

boardController.put('/likeBoard/:id', verifyToken, async (req, res) => {
    try {
        const board = await Board.findById(req.params.id)
        if(board.likes.includes(req.user.id)){
            board.likes = board.likes.filter((userId) => userId !== req.user.id)
            await board.save()

            return res.status(200).json({msg: 'Successfully unliked the board'})
        } else {
            board.likes.push(req.user.id)
            await board.save()

            return res.status(200).json({msg: "Successfully liked the board"})
        }

    } catch (error) {
        return res.status(500).json(error)
    }
})

boardController.delete('/deleteBoard/:id', verifyToken, async(req, res) => {
    try {
        const board = await Board.findById(req.params.id)
        if(board.userId.toString() !== req.user.id.toString()){
            throw new Error("You can delete only your own posts")
        }

        await Board.findByIdAndDelete(req.params.id)

        return res.status(200).json({msg: "Successfully deleted the board"})
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = boardController
