/* eslint-disable comma-dangle */
import mongoose from 'mongoose';

const CatagorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        products: [
            {
                type: mongoose.Types.ObjectId,
            },
        ],
        subcatagory: [
            {
                type: mongoose.Types.ObjectId,
            },
        ],
    },
    { timestamps: true }
);

const Catagory = mongoose.models.Catagory || mongoose.model('Catagory', CatagorySchema);

export default Catagory;
