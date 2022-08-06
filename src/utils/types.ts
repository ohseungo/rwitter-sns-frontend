export interface ManagedRouterProps {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  userInfo: object;
}

export interface UserListProps {
  userList: string[];
}
