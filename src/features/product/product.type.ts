type ProcessorSpecificationsType = {
  model: string;
  cores: number;
  frequency_ghz: string;
};

type GraphicsSpecificationsType = {
  type: string;
  model: string;
  video_memory: string;
};

type MotherboardSpecificationsType = {
  chipset: string;
};

type RAMSpecificationsType = {
  size_gb: number;
  type: string;
};

type StorageSpecificationsType = {
  type: string;
  capacity_gb: 240;
};

type PowerSupplySpecificationsType = {
  wattage: string;
  position: string;
};

type CaseSpecificationsType = {
  color: string;
  installed_fans: 4;
};

export type ProductSpecificationsType = {
  processor: ProcessorSpecificationsType;
  graphics: GraphicsSpecificationsType;
  motherboard: MotherboardSpecificationsType;
  ram: RAMSpecificationsType;
  storage: StorageSpecificationsType;
  power_supply: PowerSupplySpecificationsType;
  case: CaseSpecificationsType;
  os: string;
  warranty_months: number;
};

export type ProductType = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image_url: string;
  specifications: ProductSpecificationsType;
  brand: string;
  is_favorite: boolean;
};

export type ProductsLoaderResult = {
  products: ProductType[] | undefined;
  errorMessage?: string;
};

export type ProductItemLoaderResult = {
  product: ProductType | undefined;
  errorMessage?: string;
};
