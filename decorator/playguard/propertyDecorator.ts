const userRoles: string[] = [];

const RoleDecorator = (roles: string[]) => (target: any, key: string) => {
    roles.forEach((role) => userRoles.push(role))
}

const SetRoleDecorator = <
    T extends new (...args: any[]) => {
        [key: string]: any;
    },
    >(constructor: T) => {
    const roles = [
        { name: 'super-admin', desc: '超级管理员'},
        { name: 'admin', desc: '管理员'},
        { name: 'user', desc: '普通用户'}
    ];

    return class extends constructor {
        constructor(...args: any) {
            super(...args);
            this.roles = roles.filter((role) => userRoles.includes(role.name))
        }
    }
}

@SetRoleDecorator
class UserEntity {
    @RoleDecorator(['admin', 'user'])
    roles: string[] = [];
}

export const exp5 = () => {
    const user = new UserEntity();
    console.log(user.roles);
}
exp5();