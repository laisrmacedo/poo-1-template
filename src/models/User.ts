class UserDetalhado {
    //características, informações --> ATRIBUTOS
    //ENCAPSULAMENTO (public, private, protect)
    private id: string
    private name: string
    private email: string
    private password: string

    //açoes, funçoes --> METODOS
    constructor(
      id: string, 
      name: string, 
      email: string, 
      password: string) {
      this.id = id
      this.name = name
      this.email = email
      this.password = password
    }
    //outros metodos
}

//forma reduzida
export class User {
  //metodo constructor
  constructor(
    private id: string, 
    private name: string, 
    private email: string, 
    private password: string,
    private createdAt: string) {
  }
  
  //outros metodo 
  public getId():string {
    return this.id
  }
  public setId(newId: string):void {
    this.id = newId
  }

  public getName():string {
    return this.name
  }
  public setName(newName: string):void {
    this.id = newName
  }

  public getEmail():string {
    return this.email
  }
  public setEmail(newEmail: string):void {
    this.id = newEmail
  }

  public getPassword():string {
    return this.password
  }
  public setPassword(newPassword: string):void {
    this.id = newPassword
  }
  public getCreatedAt():string {
    return this.createdAt
  }
  public setCreatedAt(newCreatedAt: string):void {
    this.id = newCreatedAt
  }
}

//INSTANCIAR
const user1 = new User("001", "lais", "lais@email.com", "lais123", "2023-01-30 15:00:00")
const user2 = new User("002", "maria", "maria@email.com", "maria123", "2023-01-30 15:02:00")

//para acessar um valor
// console.log(user1.id) //erro pq ta privado
console.log(user1.getId()) //001

// const maria = user2.name //erro
const maria = user2.getName //maria
