import { Link } from "react-router-dom";
import { Text, Flex, Button, Card } from "@radix-ui/themes";
import { Page } from "../../core/components/Page";
import { useGetApi } from "../../core/hooks/useApi";
import { GCard } from "../model/gcard";
import { GCardView } from "./GCardView";


export const ManageDeckPage = () => {
  const response = useGetApi<GCard[]>("http://localhost:5000/gcard")

  return (
    <Page>
{response && response.data && <GCardView gcard={response.data[29]}></GCardView>}
      <Flex justify={"center"} align={"center"} direction={"column"}>
        <Link to={'/user'} style={{alignSelf: 'end', margin: '10px'}}><Button>Back</Button></Link>
        <Text size={"5"}>Manage deck</Text>

        <Card>
            <Flex justify={'between'} minWidth={'300px'}>
                <Flex direction={'column'} justify={'center'} align={'center'}>
                    <strong>Monsters</strong>
                    20 / 20
                </Flex>
                <Flex direction={'column'} justify={'center'} align={'center'}>
                    <strong>Spells</strong>
                    10 / 10
                </Flex>
                <Flex direction={'column'} justify={'center'} align={'center'}>
                    <strong>Equipaments</strong>
                    5 / 5
                </Flex>
            </Flex>
        </Card>

        <Flex>

        </Flex>
      </Flex>
    </Page>
  );
};