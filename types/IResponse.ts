export interface IResponse<T> {
    "hydra:member":     T[];
    "hydra:totalItems": number;
    "hydra:view":       IHydraView;
    "hydra:search":     IHydraSearch;
}

export interface IHydraView {
    "@id":            string;
    "@type":          string;
    "hydra:first":    string;
    "hydra:last":     string;
    "hydra:previous": string;
    "hydra:next":     string;
}

export interface IHydraSearch {
    "@type":                        string;
    "hydra:template":               string;
    "hydra:variableRepresentation": string;
    "hydra:mapping":                IHydraMapping[];
}

export interface IHydraMapping {
    "@type":  string;
    variable: string;
    property: string;
    required: boolean;
}

export interface IHeader {
    "@context"?:  string;
    "@id"?:       string;
    "@type"?:     string;
    id?:          number;
}