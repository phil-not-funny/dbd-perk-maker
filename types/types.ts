export interface Perk {
    name: string;
    description: string;
    icon: string;
    type: "teachable" | "very_rare";
};

export interface ExportPerk {
    name: string;
    description: string;
}