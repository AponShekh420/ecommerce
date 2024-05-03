import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    const { name, email, password } = await req.json();
    cookies().set('name', name, {
        httpOnly: true,
        secure: true,
        maxAge: 38990349340258,
    });
    return NextResponse.json({
        name,
        email,
        password,
        message: 'Login Successful',
    });
};

export const GET = (req) => {
    cookies().delete('name');
    return NextResponse.json({
        message: 'logout Successful',
    });
};
