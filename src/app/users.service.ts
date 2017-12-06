
export class UsersService {
  activeUsers: Array<{name: string, status: string}> = [
    {name: 'Max', status: 'active'},
    {name: 'Arne', status: 'active'},
  ];

  inActiveUsers: Array<{name: string, status: string}> = [
    {name: 'Chris', status: 'inactive'},
    {name: 'Manu', status: 'inactive'}
  ];

  inActivate(user) {
    this.activeUsers.splice(this.activeUsers.indexOf(user), 1);
    this.inActiveUsers.push({name: user.name, status: 'inactive'});
  }

  activate(user) {
    this.inActiveUsers.splice(this.inActiveUsers.indexOf(user), 1);
    this.activeUsers.push({name: user.name, status: 'active'});
  }

}
