import mongoose from "mongoose"

const invoiceSchema = mongoose.Schema = ({
    companyname: {
        type: String,
        unique: true,
        lowcase: true,
        required: true
    },
    envoicenumber: {
        type: String,
        unique: true,
        required: true
    },
    companysadress: {
        type: String,
        unique: true,
        lowcase: true,
        required: true
    },
    issuedate: {
        type: String,
        lowcase: true,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: "cart",
        required: true
    }
},
{
    versionKey: false
})

export default mongoose.model('invoice', invoiceSchema)