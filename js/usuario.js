class Usuario{
    constructor(nombre,apellido, email, dni, password)
    {
        this.nombre = nombre;
        this.apellido=apellido;
        this.email=email;
        this.dni=dni;
        this.contraseña=password;
    
    }

    registrar(nombre,apellido,email,dni,contraseña)
    {
       
        const newRegistro = new Usuario(nombre,
                                    apellido,
                                    email,
                                    dni,
                                    contraseña)


        localStorage.setItem(dni, JSON.stringify(newRegistro))

    }
}



class Pago{
    constructor(nombre,apellido, dni, tarjeta, direccion)
    {
        this.nombre = nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.tarjeta=tarjeta;
        this.direccion=direccion;
    
    }

    registrarPago(nombre,apellido,dni, tarjeta, direccion)
    {
       
        const newPago = new Pago(nombre,
                                    apellido,
                                    dni,
                                    tarjeta,
                                    direccion,)


        localStorage.setItem(tarjeta, JSON.stringify(newPago))


    }
}