import mongoose from "mongoose"

const categorieSchema = mongoose.Schema({
    name: {
        type: String,
        lowcase: true,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

export default mongoose.model('categorie', categorieSchema)