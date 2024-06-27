export interface LoginBody {
  email: string;
  password: string;
}

export interface Role {
  permissions: string[];
  _id: string;
  name: string;
  __v: number;
}

export interface IUserAuth {
  token: string;
  refreshToken: string;
  username: string;
  roles: Role[];
  permissions: string[];
  email: string;
  pagina_inicial: string;
  setor: string;
  ability: string[];
}
