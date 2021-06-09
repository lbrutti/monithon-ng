
// da ricevere da ws
export interface CicloProgrammazione {
    ocCodCicloProgrammazione: number;
    descCicloProgrammazione: string;
    isSelected: boolean;
    isActive: boolean;
}

export const CicloProgrammazioneNullo: CicloProgrammazione = {
    ocCodCicloProgrammazione: 0,
    descCicloProgrammazione: '',
    isSelected: false,
    isActive: false
}