import {AuthAPI, LoginData, SignupData, UserData,} from '../api/auth-api';
import {UserAPI, TChangeAvatar, TChangeData, TChangePassword} from "../api/user-api";
import { store } from '../store';
import {deleteUser, setError, setUser} from '../store/user';
import MessengerController from "./MessengerController";

class AuthController {
    private api: AuthAPI;
    private userApi: UserAPI

    constructor() {
        this.api = new AuthAPI()
        this.userApi = new UserAPI()
    }

    async signup(data: SignupData) {
        try {
            await this.api.signup(data);
            await this.fetchUser();
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }

    async login(data: LoginData) {
        try {
            await this.api.login(data);
            await this.fetchUser();
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }

    async logout() {
        try {
            await this.api.logout();

            store.dispatch(deleteUser());
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }

    async fetchUser(): Promise<UserData | void> {
        try {
            const user = await this.api.read();

            store.dispatch(setUser(user));

            return user;
        } catch (e) {
            store.dispatch(deleteUser());
        }
    }
    async changeUserData(data: TChangeData) {
        try {
            await this.userApi.changeData(data)
            await this.fetchUser();
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }
    async changeAvatarData(data: any) {
        try {
            await this.userApi.changeAvatar(data)
            await this.fetchUser();
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }
    async changePassword(data: TChangePassword) {
        try {
            await this.userApi.changePassword(data)
            await this.fetchUser();
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }
    async defineUser(data: {login: string}) {
        try {
            return await this.userApi.defineUser(data)
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }
}

export default new AuthController();