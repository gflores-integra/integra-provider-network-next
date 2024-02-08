import React, { useMemo } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useTable } from "react-table";
import { DraggableTableRow } from "../DraggableTableRow";
import { StaticTableRow } from "../StaticTableRow";
import { useTableManagement } from "./hooks/useTableManagement"; // Asegúrate de que la ruta es correcta

export function Table({ columns, data, setData }) {
  const {
    sensors,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    activeId,
  } = useTableManagement({ data, setData });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const selectedRow = useMemo(() => {
    if (!activeId) return null;
    const row = rows.find((r) => r.original.id === activeId);
    if (row) prepareRow(row);
    return row;
  }, [activeId, rows, prepareRow]);

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          <SortableContext
            items={data.map((d) => d.id)}
            strategy={verticalListSortingStrategy}
          >
            {rows.map((row) => {
              prepareRow(row);
              return <DraggableTableRow key={row.original.id} row={row} />;
            })}
          </SortableContext>
        </tbody>
      </table>
      <DragOverlay>
        {activeId && <StaticTableRow row={selectedRow} />}
      </DragOverlay>
    </DndContext>
  );
}
