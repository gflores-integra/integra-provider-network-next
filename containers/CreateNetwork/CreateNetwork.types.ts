type ImageType = {
  url: string;
  alternativeText?: string;
};

interface CreateNetworkProps {}

interface IconParamsProps {
  data: {
    attributes: ImageType;
  };
}

interface EventCreateNetworkViewd {
  [step: string]: string;
}

export type { EventCreateNetworkViewd, CreateNetworkProps };
