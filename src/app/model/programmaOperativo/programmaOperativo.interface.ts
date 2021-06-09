// da ricevere da ws
export interface ProgrammaOperativo {
    ocCodProgrammaOperativo: string;
    descProgrammaOperativo: string;
    isSelected: boolean;
    isActive: boolean;
}

export const ProgrammaOperativoNullo: ProgrammaOperativo = {
    ocCodProgrammaOperativo: '',
    descProgrammaOperativo: '',
    isSelected: false,
    isActive: false
};
