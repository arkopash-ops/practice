// types/experiment.ts

export type ObservationValue = string | number | boolean | Array<string | number>;

export interface Experiment {
    id: string;
    title: string;
    field: string;
    objective: string;
    materials: Materials;
    procedure: string[];
    observations: Record<string, ObservationValue | undefined>;
    result: string;
    safety: Safety;
}

export interface Materials {
    chemicals?: string[];
    components?: string[];
    equipment?: string[];
    tools?: string[];
    plants?: string[];
    biological?: string[];
    extras?: string[];
}

export interface Safety {
    level: "Low" | "Medium" | "High";
    precautions: string[];
}
