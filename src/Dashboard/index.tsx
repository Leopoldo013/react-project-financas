import { Summary } from "../Summary";
import { TrnasactionsTable } from "../TransactionsTable";
import { Container } from "./style";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TrnasactionsTable/>
        </Container>
    )
}