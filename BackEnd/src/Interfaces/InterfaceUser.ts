import mongoose from "mongoose";

export interface IUser {
    readonly _id?: string;
    lastname: string;
    firstname: string;
    avatar?: string;
    codepostal?: string;
    endereco?: string;
    city?: string;
    complemento?: string
    estados?: string
    typePeople?: string;
    login?: mongoose.Types.ObjectId;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserFind {
    email?: string;
    _id?: string;
}