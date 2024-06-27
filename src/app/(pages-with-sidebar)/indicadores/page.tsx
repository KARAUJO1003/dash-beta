import { Card } from "@/components/ui/CardAvb";
import {
  Tabs,
  TabList,
  TabTrigger,
  TabContent,
  TabPanel,
} from "@/components/ui/TabsAvb";

export default function Indicadores() {
  return (
    <div className="px-10">
      <Tabs defaultIndex={0}>
        <TabList>
          <TabTrigger index={0}>Areas Produtivas</TabTrigger>
          <TabTrigger index={1}>Dev</TabTrigger>
          <TabTrigger index={2}>Pcm</TabTrigger>
        </TabList>
        <TabContent>
          <TabPanel index={0}>
            <div className=" grid grid-cols-5 gap-4">
              <Card className="min-h-40  flex items-center justify-center">
                <h1>Page indicadores</h1>
              </Card>
            </div>
          </TabPanel>
          <TabPanel index={1}>Valor 02</TabPanel>
          <TabPanel index={2}>Valor 03</TabPanel>
        </TabContent>
      </Tabs>
    </div>
  );
}
