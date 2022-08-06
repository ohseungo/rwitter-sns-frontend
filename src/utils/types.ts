export interface ManagedRouterProps {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  userInfo: object;
}

export interface FollowListProps {
  userList: string[];
}
