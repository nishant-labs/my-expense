import { a2 as Recoil_index_24, v as Recoil_index_20, r as reactExports } from "./vendor-5_Ts9y2q.js";
import { j as toggleSourceFetchAgainFlag, a as selectSources } from "./defineProperty--9rtS8ml.js";
import { b as insertNewSource, c as updateSourceById, e as deleteSourceById } from "./index-sHCNIenN.js";
const formatNumberAsCurrency = (numberData, displaySign = true, fractionalDigits = 2) => numberData.toLocaleString("en-GB", {
  minimumFractionDigits: fractionalDigits,
  maximumFractionDigits: fractionalDigits,
  signDisplay: displaySign ? "auto" : "never",
  style: "currency",
  currency: "GBP"
});
function useSourceSettings() {
  const triggerToggle = Recoil_index_24(toggleSourceFetchAgainFlag);
  const sourceList = Recoil_index_20(selectSources);
  const [error, setError] = reactExports.useState("");
  const onSave = reactExports.useCallback(
    async (name, chartColor, isExpense) => {
      setError("");
      const response = await insertNewSource({ name, chartColor, isExpense });
      if (response.error) {
        setError("Failed to create new source");
      } else {
        triggerToggle(true);
      }
      return response;
    },
    [triggerToggle]
  );
  const onUpdate = reactExports.useCallback(
    async (id, name, chartColor, isExpense) => {
      setError("");
      const response = await updateSourceById(id, {
        name,
        chartColor,
        isExpense
      });
      if (response.error) {
        setError(`Failed to update source ${name}`);
      } else {
        triggerToggle(true);
      }
      return response;
    },
    [triggerToggle]
  );
  const onDelete = reactExports.useCallback(
    async (source) => {
      setError("");
      const response = await deleteSourceById(source.id);
      if (response.error) {
        setError(`Failed to delete source with id ${source.id}`);
      } else {
        triggerToggle(true);
      }
      return response;
    },
    [triggerToggle]
  );
  const onToggleStatus = reactExports.useCallback(
    async (source) => {
      const response = await updateSourceById(source.id, {
        isEnabled: !source.isEnabled
      });
      if (response.error) {
        setError(`Failed to update source ${source.name}`);
      } else {
        triggerToggle(true);
      }
      return response;
    },
    [triggerToggle]
  );
  return {
    sourceList,
    error,
    onSave,
    onUpdate,
    onDelete,
    onToggleStatus
  };
}
export {
  formatNumberAsCurrency as f,
  useSourceSettings as u
};
