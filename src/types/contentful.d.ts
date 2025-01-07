import { Document } from "@contentful/rich-text-types";

export interface Services {
  fields: {
    title: string;
    description: Document;
    price: string;
  };
}

export interface Teams {
  fields: {
    name: string;
    role: string;
    description: Document;
    photo: { fields: { file: { url: string } } };
  };
}
