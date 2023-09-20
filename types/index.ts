
export interface IProduct {
    "@context": string;
    "@id":      string;
    "@type":    string;
    id:          number;
    name:        string;
    price:       number;
    description: string;
    rating:      number;
    stock:       number;
    brand:       string;
    thumbnail:   string;
    images:      string[];
}

export interface IProductPayload {
    name:        string;
    price:       number;
    description: string;
}

export interface IResponse<T> {
    "hydra:member":     T[];
    "hydra:totalItems": number;
    "hydra:view":       IHydraView;
    "hydra:search":     IHydraSearch;
}

export interface IHydraView {
    "@id":            string;
    type:             string;
    "hydra:first":    string;
    "hydra:last":     string;
    "hydra:previous": string;
    "hydra:next":     string;
}

export interface IHydraMapping {
    "@type":  string;
    variable: string;
    property: string;
    required: boolean;
}

export interface IHydraSearch {
    "@type":                        string;
    "hydra:template":               string;
    "hydra:variableRepresentation": string;
    "hydra:mapping":                IHydraMapping[];
}

