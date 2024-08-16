import { useContext, useEffect } from "react";
import { Page } from "../../core/components/Page"
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useAuthData } from "../hooks/useAuthData";

export const UserLandingPage = () => {
    const userId = useAuthData();
    return (
    <Page>
        Player Landing Page. { userId }
    </Page>
    )
}