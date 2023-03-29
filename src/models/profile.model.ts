export enum ProfileFieldsEnum {
  email = "Почта",
  login = "Логин",
  first_name = "Имя",
  second_name = "Фамилия",
  display_name = "Имя в чате",
  phone = "Телефон",
}

export interface IProfileFields {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
}
