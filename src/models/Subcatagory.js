/* eslint-disable comma-dangle */
import mongoose from 'mongoose';

const SubcatagorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        products: [
            {
                type: mongoose.Types.ObjectId,
                default: [],
            },
        ],
        parent: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

const Subcatagory = mongoose.models.Subcatagory || mongoose.model('Subcatagory', SubcatagorySchema);

export default Subcatagory;
