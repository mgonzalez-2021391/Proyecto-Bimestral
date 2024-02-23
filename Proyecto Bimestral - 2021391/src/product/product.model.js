import { Schema, model } from "mongoose"

const productSchema = Schema ({
    name: {
        type: String,
        lowcase: true,
        required: true
    },
    description: {
        type: String,
        lowcase: true,
        required: true
    },
    categorie: {
        type: Schema.Types.ObjectId,
        ref: "categorie",
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

export default model("product", productSchema)