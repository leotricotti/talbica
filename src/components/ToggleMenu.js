import TableSwitcher from "./TableSwitcher";
import TableActions from "./TableActions";

function ToggleMenu() {
  return (
    <div>
      <TableSwitcher />
      <TableActions title={"Heatmaps"} />
    </div>
  );
}

export default ToggleMenu;
