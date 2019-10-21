import {Wine} from "./wine";

interface Embedded {
  wines: Wine[];
}

interface PaginationLinks {
  first: { href: string };
  self: { href: string };
  next: { href: string };
  last: { href: string };
  profile: { href: string };
}

interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}


export interface WinesRoot {
  _embedded: Embedded;
  _links: PaginationLinks;
  page: Page;
}
