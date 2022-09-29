export declare module IAPI {
  export interface IData {
    center: string;
    title: string;
    photographer: string;
    keywords: string[];
    location: string;
    nasa_id: string;
    media_type: string;
    date_created: Date;
    description: string;
    description_508: string;
    secondary_creator: string;
    album: string[];
  }

  export interface ILink {
    href: string;
    rel: string;
    render: string;
  }

  export interface IItem {
    href: string;
    data: IData[];
    links: ILink[];
  }

  export interface IMetaData {
    total_hits: number;
  }

  export interface ILink2 {
    rel: string;
    prompt: string;
    href: string;
  }

  export interface ICollection {
    version: string;
    href: string;
    items: IItem[];
    metadata: IMetaData;
    links: ILink2[];
  }

  export interface IRootObject {
    collection: ICollection;
  }
}
