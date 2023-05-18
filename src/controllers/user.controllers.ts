import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/user.interfaces";
import { crateUserService } from "../services/user/createUser.service";
import { listUsersService } from "../services/user/listUsers.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { updateUserService } from "../services/user/updateUser.service";

const createNewUser = async (req: Request, res: Response): Promise<Response> =>{
    const data: TUserRequest = req.body
    const createUser: TUserResponse = await crateUserService(data)
    return res.status(201).json(createUser)
}

const listUsersController = async (req:Request, res: Response): Promise<Response> => {
    const listUsers = await listUsersService()

    return res.json(listUsers)
}

const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const dataUpdate = req.body
    const userId: number = parseInt(req.params.id)

    const update = await updateUserService(dataUpdate, userId)

    return res.json(update)
}

const deleteUserConstroller = async (req:Request ,res: Response): Promise<Response> =>{
    const userId:number = parseInt(req.params.id)

    await deleteUserService(userId)

    return res.status(204).send()
}


export { createNewUser, listUsersController, updateUserController, deleteUserConstroller }