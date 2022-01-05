import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import Container from "@mui/material/Container";

const GitCard = ({
    name,
    url,
    fullName,
    owner
}) => {
    const history = useHistory();

    return (
        <Container onClick={(url=>history.push(url))}>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="h6">{owner.login}</Typography>
        </Container>
    )
};

export default GitCard;