declare namespace User {
  interface ISignInResponse
    extends Readonly<{
        token: string;
        data: IExtendUser;
      }> {}

  interface IExtendUser
    extends IUser,
      Readonly<{
        expired_at: number;
        last_login_ip: string;
        provider: string;
      }> {}

  interface IUser
    extends Readonly<{
        uid: number;
        email: string;
        username: string;
        bio: string;
        profile_image: string;
        confirmed: boolean;
        level: number;
        isExpired: boolean;
        registered_at: number;
      }> {}

  interface INormalizedList
    extends Readonly<{
        [key: string]: IUser | IExtendUser;
      }> {}
}
