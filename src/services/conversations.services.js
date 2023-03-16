const Conversations = require("../models/conversations.models");

class ConversationService {
  static async create(newCon,idParti) {
      try {
         const conver = await Conversations.create(newCon,idParti);
         await Participants.create({
          userId: newCon.createdBy,
          conversationsId: conver.id
         });
         await Participants.create({
          userId: idParti,
          conversationsId: conver.id
         })
         return conver;
      } catch (error) {
          throw error
      }
  }
}

module.exports = ConversationService