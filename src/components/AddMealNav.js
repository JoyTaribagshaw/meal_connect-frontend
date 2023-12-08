import AddMeal from './AddMeal';
import Navigation from './navigation/Navigation';

const AddMealNav = () => (
  <div className="flex flex-col ss:flex-row">
    <Navigation />
    <AddMeal />
  </div>
);

export default AddMealNav;
