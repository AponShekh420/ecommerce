import Subcatagory from '@/models/Subcatagory';

const { NextResponse } = require('next/server');
const { default: connectDB } = require('@/lib/connectDB,');
const { default: Catagory } = require('@/models/Catagory');

export const POST = async (req) => {
    try {
        await connectDB();
        const { name } = await req.json();
        const verify = await Catagory.findOne({ name });
        if (verify) {
            return NextResponse.json(
                {
                    error: 'The catagory already exist',
                },
                { status: 500 },
            );
        }

        const addCatagory = new Catagory({
            name,
            products: [],
            subcatagory: [],
        });

        await addCatagory.save();
        return NextResponse.json(
            {
                message: 'The catagory has added succesfully',
            },
            { status: 200 },
        );
    } catch (err) {
        console.log(err.message);
    }
};

export const GET = async () => {
    try {
        await connectDB();
        const data = await Catagory.find().populate({ path: 'subcatagory', model: Subcatagory });
        return NextResponse.json(data, { status: 200 });
    } catch (err) {
        console.log(err.message);
    }
};
