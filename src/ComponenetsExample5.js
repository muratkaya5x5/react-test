import ButtonProps from "./componenets/ButtonProps";
import ButtonChildren from "./componenets/ButtonChildren";
import Tab from "./componenets/Tab";
function ComponenetsExample5() {
  return (
    <>
      <h1>hello world</h1>
      <ButtonProps text="Button 1"> 
      </ButtonProps> 
      <ButtonChildren text="Button 2">
        -2
      </ButtonChildren> 
      <Tab>
        <Tab.Panel title="Profil"></Tab.Panel>
        <Tab.Panel title="Hakkımızda"></Tab.Panel>
        <Tab.Panel title="Ana Sayfa"></Tab.Panel>
      </Tab>
    </>
  );
}

export default ComponenetsExample5;
