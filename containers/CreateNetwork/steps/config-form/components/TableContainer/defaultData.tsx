const defaultTableData = [
  {
    ImageRed: "url",
    NameRed: "RED MEDICA",
    DescriptionRed: "Red medica",
    Groups: [
      {
        DescriptionGroup: "Contacto",
        Mandatory: true,
        ViewCac: false,
        ViewFinanzas: true,
        ViewApp: false,
        Fields: {
          "Nombre Comercial": {
            Parametro: "Solo Letras",
            TextoAdaptable: "Adaptable",
          },
          "Titulo dinamico": {
            Parametro: "Solo Letras",
            TextoAdaptable: "Opciones",
          },
        },
      },
    ],
  },
];

export { defaultTableData };
