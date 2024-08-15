import { Link, useNavigate } from "react-router-dom"
import { Page } from "../../core/components/Page"
import { useContext, useEffect } from "react"
import UserContext from "../../player/UserContext"

export const NonAuthorized = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate('/non-authorized');
        }
    }, [user, navigate]);

    return (
    <Page>
        You are not able to see this page.
        <Link to="/">Login</Link>
    </Page>
    )
}