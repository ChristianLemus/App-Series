export class Show {
    id: number;
    image: { medium: string, original: string };
    name: string;
    genres: string[];
    language: string;
    premiered: Date;
    rating: { average: number };
    summary: string;
    isLoading?: boolean;
}

export class Gender {
    gender: string;
}

export class ShowDetailedInfo {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: object;
    rating: object;
    weight: number;
    network: object;
    webchannel: object;
    externals: object;
    image: { medium: string, original: string };
    summary: string;
    updated: number;
    _links: object;
  }