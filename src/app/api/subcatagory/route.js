import Catagory from '@/models/Catagory';
import Product from '@/models/Product';
import Subcatagory from '@/models/Subcatagory';

const { NextResponse } = require('next/server');
const { default: connectDB } = require('@/lib/connectDB,');

export const POST = async (req) => {
    try {
        await connectDB();
        const { name, parent } = await req.json();
        const verify = await Subcatagory.findOne({ name, parent });
        if (verify) {
            return NextResponse.json(
                {
                    error: 'The subcatagory already exist',
                },
                { status: 500 },
            );
        }

        const addCatagory = new Subcatagory({
            name,
            parent,
        });

        await addCatagory.save();

        await Catagory.findByIdAndUpdate(addCatagory.parent, {
            $push: { subcatagory: addCatagory._id },
        });

        return NextResponse.json(
            {
                message: 'The subcatagory has added succesfully',
            },
            { status: 200 },
        );
    } catch (err) {
        console.log(err.message);
    }
};

export const GET = async (req) => {
    try {
        await connectDB();
        const data = await Subcatagory.findById('6634e5de338e03ecff5fe36a')
            .populate({
                path: 'parent',
                select: '',
                model: Catagory,
            })
            .populate({ path: 'products', model: Product });
        return NextResponse.json(data);
    } catch (err) {
        console.log(err.message);
    }
};
