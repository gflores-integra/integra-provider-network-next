import { useState } from "react";
import { ArrayHelpers, FormikHelpers, useFormikContext } from "formik";

interface GroupData {
  campos: string[];
  grupo: string;
}

interface RowData {
  orden: string;
  grupo: string;
  isGroup: boolean;
  campo: string[];
  esObligatorio: boolean;
  parametros: any[];
  visualizacion: any[];
  quienPuedeVerlo: any;
}

export const useEditableTable = (
  data: RowData[],
  setData: (data: RowData[]) => void,
  arrayHelpers: ArrayHelpers,
  setFieldValue: FormikHelpers<any>["setFieldValue"]
) => {
  const [editingGroupIndex, setEditingGroupIndex] = useState<number | null>(
    null
  );
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isGroupSelected, setIsGroupSelected] = useState(true); // Suponiendo que "grupo" es la selección por defecto
  const { validateField } = useFormikContext();

  const filterEmptyFields = (fields: string[]) => {
    return fields.filter((field) => field.trim() !== "");
  };

  const createNewRow = (groupData: GroupData): RowData => {
    const camposFiltrados = filterEmptyFields(groupData.campos);
    return {
      orden: "",
      grupo: groupData.grupo,
      campo: camposFiltrados.length > 0 ? camposFiltrados : [""],
      isGroup: false,
      esObligatorio: false,
      parametros: [],
      visualizacion: [],
      quienPuedeVerlo: {},
    };
  };

  const updateGroupField = (index: number, value: string) => {
    const updatedData = [...data];
    updatedData[index].grupo = value;
    return updatedData;
  };

  const handleRemoveField = (rowIndex: number, fieldIndex: number) => {
    const updatedData = [...data];
    updatedData[rowIndex].campo.splice(fieldIndex, 1);
    updatedData[rowIndex].isGroup = updatedData[rowIndex].campo.length > 1; // Si queda más de 1 campo, sigue siendo un grupo
    if (updatedData[rowIndex].campo.length === 0) {
      arrayHelpers.remove(rowIndex);
    } else {
      setData(updatedData);
      setFieldValue(`EditableTableData`, updatedData); // Actualizar todos los datos
    }
  };
  const handleAddGroup = (groupData: GroupData) => {
    const newRow = {
      ...createNewRow(groupData),
      isGroup: true,
    };
    arrayHelpers.push(newRow);
    setShowGroupModal(false);
  };

  const handleAddRow = (groupData: GroupData = { grupo: "", campos: [""] }) => {
    const newRow = {
      ...createNewRow(groupData),
      isGroup: false,
    };
    const currentData = data || [];
    const newData = [...currentData, newRow];
    setFieldValue("EditableTableData", newData);
  };

  const handleGroupNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedData = updateGroupField(index, e.target.value);
    setData(updatedData);
    setFieldValue(`EditableTableData[${index}].grupo`, e.target.value);
    validateField(`EditableTableData[${index}].grupo`); // Forzar validación para este campo
  };

  const handleGroupNameBlur = () => {
    setEditingGroupIndex(null);
  };

  const handleIsGroupChange = (index: number, value: boolean) => {
    const updatedData = [...data];
    updatedData[index].isGroup = value;
    setData(updatedData);
    setFieldValue(`EditableTableData[${index}].isGroup`, value);
  };

  const handleDoubleClick = (index: number) => {
    setEditingGroupIndex(index);
  };

  const handleDropdownChange = (option: string) => {
    setSelectedOption(option);
    setShowGroupModal(false);
    setIsGroupSelected(option === "Grupo");
    if (option === "Elemento") {
      handleAddRow();
    } else if (option === "Grupo") {
      setShowGroupModal(true);
    }
  };

  const handleAddField = (rowIndex: number) => {
    const updatedData = [...data];
    updatedData[rowIndex].campo.push("");
    updatedData[rowIndex].isGroup = updatedData[rowIndex].campo.length > 1; // Si hay más de 1 campo, es un grupo
    setData(updatedData);
    setFieldValue(`EditableTableData`, updatedData); // Actualizar todos los datos
  };

  return {
    editingGroupIndex,
    setEditingGroupIndex,
    showGroupModal,
    setShowGroupModal,
    selectedOption,
    setSelectedOption,
    handleRemoveField,
    handleAddGroup,
    handleAddRow,
    handleGroupNameChange,
    handleGroupNameBlur,
    handleDoubleClick,
    handleDropdownChange,
    handleAddField,
    isGroupSelected,
  };
};
