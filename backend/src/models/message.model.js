import mangoose from "mangoose"  //mangosse import

const messageSchema = new mangoose.Schema(
    {
    senderId :{
        type : mangoose.Schema.Types.ObjectId ,
        ref :"User",
        require:true,
    },
    recieverId :{
        type : mangoose.Schema.Types.ObjectId ,
        ref :"User",
        require:true,
    },
    text:{
        type:String,
    },
    image:{
        type:String,
    },
    video:{
        type:String,
    },
},{timestamps:true})                 //mangoose schema

const Message = mangoose.model("Message",messageSchema) //model 

export default Message  //exporting model