/* eslint-disable comma-dangle */
import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        img: {
            type: Array,
            required: true,
        },
        catagory: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        subcatagory: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
