import BaseAPI from "./base-api";
import { SignupData } from "./auth-api";

export type TChangeData = Omit<SignupData, "password"> & {display_name: string}
export type TChangeAvatar = { File };
export type TChangePassword = {
    oldPassword: string;
    newPassword: string
}
export class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    changeData(data: TChangeData): Promise<void> {
        return this.http.put('/profile', data)
    }

    changeAvatar(data: FormData): Promise<void> {
        return this.http.put('/profile/avatar', data)
    }
    changePassword(data: TChangePassword): Promise<void> {
        return this.http.put('/password', data)
    }
    defineUser(data: {login: string}): Promise<void> {
        return this.http.post('/search', data)
    }

    delete: undefined;
    create: undefined;
    update: undefined;
    read: undefined;
}