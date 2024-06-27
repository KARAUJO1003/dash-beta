import {
  TabContent,
  TabList,
  TabPanel,
  TabTrigger,
  Tabs,
} from "@/components/ui/TabsAvb";

const MyComponent = () => {
  return (
    <div className="px-10">
      <Tabs defaultIndex={0}>
        <TabList>
          <TabTrigger index={0}>Areas Produtivas</TabTrigger>
          <TabTrigger index={1}>Dev</TabTrigger>
          <TabTrigger index={2}>Pcm</TabTrigger>
        </TabList>
        <TabContent>
          <TabPanel index={0}>Vretery</TabPanel>
          <TabPanel index={1}>Valor 02</TabPanel>
          <TabPanel index={2}>Valor 03</TabPanel>
        </TabContent>
      </Tabs>
    </div>
  );
};

export default MyComponent;
