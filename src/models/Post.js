
import mongoose, {Schema} from "mongoose";

const postScheme = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        caption: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
        }],
    },
    {
        timestamps: true
    }
)

export default mongoose.models.Post || mongoose.model("Post", postScheme)