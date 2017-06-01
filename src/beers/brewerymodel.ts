export class BreweryBeer {
    id: string;
    name: string;
    description: string;
    labels:  BreweryLabels;
}

export class BreweryLabels {
    icon: string;
    medium: string;
    large: string;
}
