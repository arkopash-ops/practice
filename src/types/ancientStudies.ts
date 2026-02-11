export interface AncientStudy {
    id: string;
    title: string;
    field: string;
    objective: string;
    materials: Materials;
    procedure: string[];
    observations: {
        [key: string]: string[] | undefined
    };
    result: string;
    safety: Safety;
}

export interface Materials {
    Texts?: string[];
    Tools?: string[];
    Herbs?: string[];
    Structures?: string[];
    Items?: string[];
}

export interface Safety {
    level: 'Low' | 'Moderate' | 'High';
    precautions: string[];
}
