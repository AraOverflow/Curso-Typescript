import { ComponentProps } from 'react';
//import { useState } from 'react';

type BotonProps = ComponentProps<'button'>;

// type Articulo = {
//     id: number;
//     nombre: string;
//     precio: number;
//     };

const Boton = ({onClick, ...rest}: BotonProps) => {

    // //const [estado, setEstado] = useState<Articulo | null>(null);

    // let articulo: Articulo = {
    //     id: 1,
    //     nombre: "Camiseta",
    //     precio: 20,
    // };

    // //setEstado(articulo);

  return (
    <div>
      <button onClick={onClick} {...rest}>
        Botón
      </button>
    </div>
  );
};

export default Boton;
