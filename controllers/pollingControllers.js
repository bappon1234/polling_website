const Poll = require("../models/polingModel");

exports.createPoll = async (req, res)=>{
    try{
        const poll = new Poll(req.body);
        await poll.save();
        res.status(201).json(poll);
    } catch(error){
        res.status(400).json({message: error.message});
    }
};

exports.getPolls = async (req, res)=>{
    try{
        const polls = await Poll.find();
        res.json(polls);
    }catch(error){
        res.status(400).json({message: error.message});
    }
};

exports.votePoll = async(req, res)=>{
    try{
        const { pollId, optionIndex } = req.body;
        const poll = await Poll.findById(pollId);
        if(poll){
            poll.options[optionIndex].votes += 1;
            await poll.save();
            res.json(poll);
        }else {
            res.status(400).json({message: 'Poll not found'});
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};