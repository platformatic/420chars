/**
 * User
 * A User
 */
declare interface User {
    id?: number;
    username: string;
    email: string;
    auth0Id?: string | null;
}

export { User };
