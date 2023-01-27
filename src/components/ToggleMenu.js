import TableSwitcher from "./TableSwitcher";
import TableActions from "./TableActions";

function ToggleMenu() {
  return (
    <>
      <TableSwitcher />
      <TableActions title={"Heatmaps"} />
    </>
  );
}

export default ToggleMenu;
