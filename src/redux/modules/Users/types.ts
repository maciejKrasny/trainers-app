export type UserType = 'TRAINER' | 'USER' | 'ADMIN';

export interface UserDetails {
    city?: string;
    description?: string;
    phone?: number;
    firstName: string;
    lastName: string;
}

export interface MostPopularUser {
    _id: string;
}

export interface User {
    _id: string;
    type: UserType;
    isObserved?: boolean;
    email?: string;
    specializations?: string[];
    userDetails: UserDetails;
    reviewsSummary: {
        averageGrade: number;
    }
}

export interface UserState {
    users: User[];
    mostPopularUsers: MostPopularUser[];
    pending: boolean;
}

export const SET_USERS = 'SET_USERS';
export const SET_MOST_POPULAR_USERS = 'SET_MOST_POPULAR_USERS';
export const TO_OBSERVED = 'TO_OBSERVED';
export const SET_USER_PENDING = 'SET_USER_PENDING';

export interface SetUsersAction {
    type: typeof SET_USERS;
    payload: User[];
}

export interface SetUserPending {
    type: typeof SET_USER_PENDING;
    payload: boolean;
}

export interface ToObservedAction {
    type: typeof TO_OBSERVED;
    payload: string;
}

export interface SetMostPopularUsersAction {
    type: typeof SET_MOST_POPULAR_USERS;
    payload: MostPopularUser[];
}


export type UserActions = SetUsersAction | SetUserPending | ToObservedAction | SetMostPopularUsersAction;