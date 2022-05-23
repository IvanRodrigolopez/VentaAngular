export interface User {
    _id : string;
    usuario:string;
    nombre :string;
    apellidos :string;
    fechaIngreso :Date;
    activo :boolean;
    password :string;
}
