import { createContext } from "react";
import { User } from "./model/user";

type userContextType = {
    user?: User,
    login?: (user: User) => void,
    logout?: () => void
}

const UserContext = createContext<userContextType>({
    user: undefined,
});
export default UserContext;