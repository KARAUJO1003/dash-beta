import { TabPanelTest, TabTest, TabsTest } from "@/components/ui/TabTest";

const MyComponent = () => {
  return (
    <div>
      <TabsTest>
        <TabTest label="Tab 1">
          <TabPanelTest>
            <p>Conteúdo da Tab 1</p>
          </TabPanelTest>
        </TabTest>
        <TabTest label="Tab 2">
          <TabPanelTest>
            <p>Conteúdo da Tab 2</p>
          </TabPanelTest>
        </TabTest>
        <TabTest label="Tab 3">
          <TabPanelTest>
            <p>Conteúdo da Tab 3</p>
          </TabPanelTest>
        </TabTest>
      </TabsTest>
    </div>
  );
};

export default MyComponent;
