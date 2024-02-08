import React from "react";
import { useFormikContext } from "formik";
import { useTable } from "react-table";
import {
  dropdownOptionsParams,
  dropdownOptionsView,
} from "../../TableContainer.constants";
import { GroupModal } from "./components/GroupModal";
import { Dropdown } from "../../../DropdownFields/components/Dropdown";
import { FieldsEditable } from "../../../FieldsEditable/FieldsEditable";
import { CustomCheckbox } from "../../../CustomCheckbox";
import { DropdownFields } from "../../../DropdownFields";
import { ViewIcons } from "../../../ViewIcons";
import { GroupField } from "../../../GroupField";
import { useEditableTable } from "./hooks/useEditableTable";
import * as Styled from "./EditableTable.styles";

interface RowData {
  orden: string;
  grupo: string;
  campo: string[];
  esObligatorio: boolean;
  parametros: any[];
  visualizacion: any[];
  quienPuedeVerlo: any;
}

interface EditableTableProps {
  columns: any[];
  data: RowData[];
  setData: (data: RowData[]) => void;
  arrayHelpers: any;
}

export function EditableTable({
  columns,
  data,
  setData,
  arrayHelpers,
}: EditableTableProps) {
  const { values, setFieldValue } = useFormikContext<any>();

  const {
    editingGroupIndex,
    setEditingGroupIndex,
    showGroupModal,
    setShowGroupModal,
    selectedOption,
    setSelectedOption,
    handleRemoveField,
    handleAddGroup,
    handleAddRow,
    handleAddField,
    handleGroupNameChange,
    handleGroupNameBlur,
    handleDoubleClick,
    handleDropdownChange,
    isGroupSelected,
  } = useEditableTable(data, setData, arrayHelpers, setFieldValue);

  const dropdownOptions = ["Elemento", "Grupo"];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <Styled.AddElementButtonContainer>
        <Styled.StyledDropdown>
          <Dropdown
            options={dropdownOptions}
            selectedOption={selectedOption}
            onChange={handleDropdownChange}
            disabled={false}
          />
        </Styled.StyledDropdown>
      </Styled.AddElementButtonContainer>
      {showGroupModal && (
        <GroupModal
          isOpen={showGroupModal}
          onClose={() => setShowGroupModal(false)}
          onSave={handleAddGroup}
        />
      )}

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(
            (headerGroup: {
              getHeaderGroupProps: () => React.JSX.IntrinsicAttributes &
                React.ClassAttributes<HTMLTableRowElement> &
                React.HTMLAttributes<HTMLTableRowElement>;
              headers: {
                getHeaderProps: () => React.JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableHeaderCellElement> &
                  React.ThHTMLAttributes<HTMLTableHeaderCellElement>;
                render: (
                  arg0: string
                ) =>
                  | string
                  | number
                  | boolean
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | null
                  | undefined;
              }[];
            }) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(
                  (column: {
                    getHeaderProps: () => React.JSX.IntrinsicAttributes &
                      React.ClassAttributes<HTMLTableHeaderCellElement> &
                      React.ThHTMLAttributes<HTMLTableHeaderCellElement>;
                    render: (
                      arg0: string
                    ) =>
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | React.PromiseLikeOfReactNode
                      | null
                      | undefined;
                  }) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  )
                )}
                <th>Acciones</th>
              </tr>
            )
          )}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (
              row: {
                getRowProps: () => React.JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableRowElement> &
                  React.HTMLAttributes<HTMLTableRowElement>;
                cells: any[];
              },
              index: number
            ) => {
              prepareRow(row);
              const numFields =
                values.EditableTableData[index]?.campo?.length || 0;
              const isGroupEmpty = !values.EditableTableData[index]?.grupo;

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    if (cell.column.id === "grupo") {
                      return (
                        <Styled.StyledTd {...cell.getCellProps()}>
                          <GroupField
                            index={index}
                            editingGroupIndex={editingGroupIndex}
                            setEditingGroupIndex={setEditingGroupIndex}
                            handleAddField={handleAddField}
                            handleGroupNameChange={handleGroupNameChange}
                            handleGroupNameBlur={handleGroupNameBlur}
                          />
                        </Styled.StyledTd>
                      );
                    } else if (cell.column.id === "campo") {
                      return (
                        <td {...cell.getCellProps()}>
                          <FieldsEditable
                            fieldNames={cell.value}
                            path={`EditableTableData[${index}].campo`}
                          />
                        </td>
                      );
                    } else if (cell.column.id === "esObligatorio") {
                      return (
                        <td {...cell.getCellProps()}>
                          <CustomCheckbox>
                            <CustomCheckbox.Editable
                              path={`EditableTableData[${index}].esObligatorio`}
                            />
                          </CustomCheckbox>
                        </td>
                      );
                    } else if (cell.column.id === "parametros") {
                      return (
                        <td {...cell.getCellProps()}>
                          {Array.from({ length: numFields }).map(
                            (_, fieldIndex) => (
                              <DropdownFields key={fieldIndex}>
                                <DropdownFields.Editable
                                  path={`EditableTableData[${index}].parametros[${fieldIndex}]`}
                                  options={dropdownOptionsParams}
                                />
                              </DropdownFields>
                            )
                          )}
                        </td>
                      );
                    } else if (cell.column.id === "visualizacion") {
                      return (
                        <td {...cell.getCellProps()}>
                          {Array.from({ length: numFields }).map(
                            (_, fieldIndex) => (
                              <DropdownFields key={fieldIndex}>
                                <DropdownFields.Editable
                                  path={`EditableTableData[${index}].visualizacion[${fieldIndex}]`}
                                  options={dropdownOptionsView}
                                />
                              </DropdownFields>
                            )
                          )}
                        </td>
                      );
                    } else if (cell.column.id === "quienPuedeVerlo") {
                      return (
                        <td {...cell.getCellProps()}>
                          <ViewIcons
                            viewProps={cell.value}
                            path={`EditableTableData[${index}].quienPuedeVerlo`}
                            isEditable={true}
                          />
                        </td>
                      );
                    } else {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    }
                  })}
                  <td>
                    {Array.from({ length: numFields }).map((_, fieldIndex) => (
                      <Styled.IconContainer
                        key={fieldIndex}
                        onClick={() => handleRemoveField(index, fieldIndex)}
                        style={{ display: "block", marginBottom: "10px" }}
                      >
                        <Styled.IconContent
                          name="TrashIcon"
                          width="32px"
                          height="32px"
                        />
                      </Styled.IconContainer>
                    ))}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
}
