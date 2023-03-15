const Avatar = require("./avatar.models");
const Conversations = require("./conversations.models");
const Messages = require("./messages.models");
const Participants = require("./participants.models");
const Types = require("./types.models");
const Users = require("./users.models");


const initModels = () => {

  Avatar.hasMany(Users,{foreignKey:"avatarId"})
  Users.belongsTo(Avatar,{foreignKey:"avatarId"})

  Users.hasMany(Participants,{foreignKey:"usersId"})
  Participants.belongsTo(Users,{foreignKey:"usersId"})

  Users.hasMany(Conversations,{foreignKey:"createdId"})
  Conversations.belongsTo(Users,{foreignKey:"createdId"})

  Conversations.hasMany(Participants,{foreignKey:"conversationsId"})
  Participants.belongsTo(Conversations,{foreignKey:"conversationsId"})

  Types.hasMany(Conversations,{foreignKey:"typesId"})
  Conversations.belongsTo(Types,{foreignKey:"typesId"})

  Conversations.hasMany(Messages,{foreignKey:"messageId"})
  Messages.belongsTo(Conversations,{foreignKey:"messageId"})


}

module.exports = initModels
