type UserProfile = Record<string, any> & {
    phone?: number;
    address?: string;
}

const ProfileDecorator = (profile: UserProfile) => (target: any) => {
    const Original = target;
    let userInfo = '';
    Object.keys(profile).forEach((key) => {
        userInfo = `${userInfo}.${profile[key].toString()}`;
    })

    Original.prototype.userInfo = userInfo;

    function constructor(...args: any[]) {
        console.log('construct has been changed');
        return new Original(...args);
    }

    constructor.prototype = Original.prototype;
    // 添加一个静态属性
    constructor.myInfo = `myinfo ${userInfo}`;
    return constructor as typeof Original;
}

interface StaticUser {
    new (): UserProfile;
    myInfo: string;
}

@ProfileDecorator({phone:133, address:"liaoning"})
class ProfileService {}

const exp4 = () => {
    const profile = new ProfileService();
    console.log((ProfileService as unknown as StaticUser).myInfo);
    console.log((profile as any).userInfo);
}

exp4();