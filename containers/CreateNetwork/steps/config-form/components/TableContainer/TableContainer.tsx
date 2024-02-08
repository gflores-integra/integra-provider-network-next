import React from "react";
import styled from "styled-components";
import { useFormikContext, FieldArray } from "formik";

import { Table } from "./components/Table";
import { GroupField } from "../GroupField";
import { Fields } from "../Fields/Fields";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { DropdownFields } from "../DropdownFields";
import { ViewIcons } from "../ViewIcons";
import { Tabs } from "../Tabs";
import { EditableTable } from "./components/EditableTable";
import { FieldsEditable } from "../FieldsEditable";
import {
  dropdownOptionsParams,
  dropdownOptionsView,
} from "./TableContainer.constants";

const Styles = styled.div`
  padding: 0rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      font-family: Monserrat, sans-serif;
      margin: 0;
      padding: 0.5rem;
      color: #333;
      font-weight: bold;
      font-size: 13px;
    }

    td {
      margin: 0;
      padding: 0.5rem;

      :last-child {
      }
    }
  }
`;

interface FormValues {
  TableData: any[];
  EditableTableData: [];
}

function TableContainer() {
  const { values, setFieldValue } = useFormikContext<FormValues>();
  const data = values.TableData || [];
  const editableData = values.EditableTableData || [];

  const handleDataChange = (newData: any) => {
    setFieldValue("TableData", newData);
  };

  const handleEditableDataChange = (newData: any) => {
    setFieldValue("EditableTableData", newData);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Orden",
        accessor: "orden",
      },
      {
        Header: "Grupo",
        accessor: "grupo",
        Cell: ({ value }) => {
          if (value) {
            return <GroupField descriptionGroup={value} />;
          }
          return null;
        },
      },
      {
        Header: "Campo",
        accessor: "campo",
        Cell: ({ value }) => <Fields fieldNames={value} />,
      },
      {
        Header: "¿Es obligatorio?",
        accessor: "esObligatorio",
        Cell: ({ value }) => (
          <CustomCheckbox>
            <CustomCheckbox.Original isMandatory={value} />
          </CustomCheckbox>
        ),
      },

      {
        Header: "Parámetros",
        accessor: "parametros",
        Cell: ({ row }) => (
          <DropdownFields>
            <DropdownFields.Original
              parametros={row.original.parametros}
              path={`TableData[${row.index}].parametros`}
              options={dropdownOptionsParams}
            />
          </DropdownFields>
        ),
      },
      {
        Header: "Visualización",
        accessor: "visualizacion",
        Cell: ({ row }) => (
          <DropdownFields>
            <DropdownFields.Original
              parametros={row.original.parametros}
              path={`TableData[${row.index}].parametros`}
              options={dropdownOptionsView}
            />
          </DropdownFields>
        ),
      },
      {
        Header: "¿Quién puede verlo?",
        accessor: "quienPuedeVerlo",
        Cell: ({ row }) => (
          <ViewIcons
            viewProps={row.original.quienPuedeVerlo}
            path={`TableData[${row.index}].quienPuedeVerlo`}
          />
        ),
      },
    ],
    []
  );

  const editableColumns = React.useMemo(
    () => [
      {
        Header: "Orden",
        accessor: "orden",
      },
      {
        Header: "Grupo",
        accessor: "grupo",
        Cell: ({ value }) => {
          if (value) {
            return <GroupField descriptionGroup={value} />;
          }
          return null;
        },
      },
      {
        Header: "Campo",
        accessor: "campo",
        Cell: ({ value }) => <FieldsEditable fieldNames={value} />,
      },
      {
        Header: "¿Es obligatorio?",
        accessor: "esObligatorio",
        Cell: ({ row }) => (
          <CustomCheckbox>
            <CustomCheckbox.Editable
              path={`EditableTableData[${row.index}].esObligatorio`}
            />
          </CustomCheckbox>
        ),
      },
      {
        Header: "Parámetros",
        accessor: "parametros",
        Cell: ({ row }) => (
          <DropdownFields>
            <DropdownFields.Editable
              path={`EditableTableData[${row.index}].parametros`}
              options={dropdownOptionsParams}
            />
          </DropdownFields>
        ),
      },
      {
        Header: "Visualización",
        accessor: "visualizacion",
        Cell: ({ row }) => (
          <DropdownFields>
            <DropdownFields.Editable
              path={`EditableTableData[${row.index}].visualizacion`}
              options={dropdownOptionsParams}
            />
          </DropdownFields>
        ),
      },
      {
        Header: "¿Quién puede verlo?",
        accessor: "quienPuedeVerlo",
        Cell: ({ row }) => (
          <ViewIcons
            viewProps={row.original.quienPuedeVerlo}
            path={`EditableTableData[${row.index}].quienPuedeVerlo`}
          />
        ),
      },
    ],
    [handleEditableDataChange]
  );

  return (
    <Styles>
      <Tabs>
        <FieldArray name="TableData">
          {() => (
            <Table columns={columns} data={data} setData={handleDataChange} />
          )}
        </FieldArray>
        <FieldArray name="EditableTableData">
          {(editableArrayHelpers) => (
            <EditableTable
              columns={editableColumns}
              data={editableData}
              setData={handleEditableDataChange}
              arrayHelpers={editableArrayHelpers}
            />
          )}
        </FieldArray>
      </Tabs>
    </Styles>
  );
}

export { TableContainer };
