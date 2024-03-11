import Counter from "./Components/Counter";
import TaskList from "./Components/TaskList";
const App = () => {
  const itemsArr = ["Laptops", "Mouses", "Headphones", "Bluetooths", "Mobiles"];
  return (
    <div>
      <TaskList />
      {itemsArr.map((electronicItems, index) => {
        return <Counter key={index} itemName={electronicItems} />;
      })}
      ;
    </div>
  );
};

export default App;
