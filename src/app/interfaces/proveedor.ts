export  interface Proveedor {
    id_proveedores?: number;
    nombre: string;
    ap_pat: string;
    ap_mat: string;
    genero: string;
    calle: string;
    colonia: string;
    cp: string;
    correo: string;
    telefono: number;
    created_at?: string;
    update_at?: string;
}
