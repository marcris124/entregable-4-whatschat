const ConversationService = require("../services/conversations.services");

const createConversation = async(req, res ,next) =>{
  try {
      const newCon =req.body;
      const idParti= req.body.idparti;
      const result = await ConversationService.create(newCon,idParti)
      res.status(201).json(result);
  } catch (error) {
      next(error)
  }
};

module.exports = {
  createConversation
}