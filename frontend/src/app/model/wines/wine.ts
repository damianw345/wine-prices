interface Links {
  self: { href: string };
  wine: { href: string };
}

export interface Wine {
  country: string;
  description: string;
  designation: string;
  points: string;
  price?: any;
  province: string;
  firstRegion: string;
  secondRegion?: any;
  tasterName: string;
  tasterTwitterHandle: string;
  title: string;
  variety: string;
  winery: string;
  _links: Links;
}
