const defaultTableData = [
  {
    ImageRed: "url",
    NameRed: "RED MEDICA",
    DescriptionRed: "Red medica",
    Groups: [
      {
        DescriptionGroup: "Contacto",
        Mandatory: true,
        ViewCac: true,
        ViewFinanzas: true,
        ViewApp: true,
        Fields: {
          "Nombre Comercial": {
            Parametro: "Solo letras",
            TextoAdaptable: "Adaptable",
          },
          "Titulo dinamico": {
            Parametro: "Solo letras",
            TextoAdaptable: "Opciones",
          },
        },
      },
      {
        DescriptionGroup: "",
        Mandatory: true,
        ViewCac: false,
        ViewFinanzas: true,
        ViewApp: false,
        Fields: {
          "Nombre Comercial2": {
            Parametro: "Solo números",
            TextoAdaptable: "Adaptable",
          },
        },
      },
      {
        DescriptionGroup: "Contacto3",
        Mandatory: false,
        ViewCac: true,
        ViewFinanzas: true,
        ViewApp: false,
        Fields: {
          "Nombre Comercial3": {
            Parametro: "Solo letras",
            TextoAdaptable: "Adaptable",
          },
          "Titulo dinamico3": {
            Parametro: "No. y letrass",
            TextoAdaptable: "Opciones",
          },
        },
      },
    ],
  },
];

const defaultViewProps = {
  ViewCac: false,
  ViewFinanzas: false,
  ViewApp: false,
};

export default function makeData() {
  let rows = [];
  defaultTableData.forEach((data, dataIndex) => {
    data.Groups.forEach((group, groupIndex) => {
      const fieldNames = Object.keys(group.Fields);
      const params = fieldNames.map((name) => group.Fields[name].Parametro);
      const displayView = fieldNames.map(
        (name) => group.Fields[name].TextoAdaptable
      );

      const viewProps = { ...defaultViewProps };
      Object.keys(defaultViewProps).forEach((key) => {
        if (group.hasOwnProperty(key)) {
          viewProps[key] = group[key];
        }
      });

      rows.push({
        id: `row-${dataIndex}-${groupIndex}`,
        orden: `Orden ${dataIndex}-${groupIndex}`,
        grupo: group.DescriptionGroup || "",
        campo: fieldNames,
        esObligatorio: group.Mandatory,
        parametros: params,
        visualizacion: displayView,
        quienPuedeVerlo: viewProps,
      });
    });
  });
  return rows;
}
