export interface Galaxy {
    id: string;
    name: string;
    img: string;
    type: "Spiral" | "Barred Spiral" | "Elliptical" | "Lenticular" | "Irregular";
    distanceLightYears: number;
    diameterLightYears: number;
    estimatedStars: number;
    discovery: Discovery;
    location: Location;
    notes: string;
}

export interface Location {
    constellation: string;
    rightAscension: string;
    declination: string;
}

export interface Discovery {
    discoveredBy: string;
    year: number | null;
}

