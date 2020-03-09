export class Casa{
    id: number;
    direccion: string;
    pais: string;
    provincia: string;
    imagen: string;
    
    constructor(pId: number, pDireccion: string, pPais: string, pProvincia: string, pImagen: string){
        this.id = pId;
        this.direccion = pDireccion;
        this.pais = pPais;
        this.provincia = pProvincia;
        this.imagen = pImagen;
    }
}
