
import mongoose, {Schema} from "mongoose";


const userSchema = new Schema(
    {

        username: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        bio:{
            type: String,
            default: ""
        },
        profilePic: {
            type: String,
            default: ""
        },
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                default: []
            }
        ],
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                default: []
            }
        ],
        postCount: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.models.User || mongoose.model("User", userSchema)