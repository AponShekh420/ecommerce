/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import connectDB from '@/lib/connectDB,';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        await connectDB();
        const {
 title, desc, price, stock, sku, status, img, catagory, subcatagory,
} = await req.json();
        const addProduct = new Product({
            title,
            desc,
            price,
            stock,
            sku,
            status,
            img,
            catagory,
            subcatagory,
        });
        await addProduct.save();
        return NextResponse.json({
            message: 'The product has added successfully',
        });
    } catch (err) {
        console.log(err.message);
    }
};

export const GET = async (req) => {
    try {
        await connectDB();
        const products = await Product.find({
            $and: [
                {
                    status: 'active',
                },
                {
                    price: {
                        $gt: 0,
                    },
                },
            ],
        });
        return NextResponse.json(
            {
                products,
            },
            { status: 200 },
        );
    } catch (err) {
        console.log(err.message);
    }
};

// export const PUT = () =>
