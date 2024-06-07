import React from 'react';

const Principal = () => {
    return (
        <div className="relative bg-gray-900 min-h-screen flex flex-col justify-center items-center">
            <img 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                src="https://www.kivet.com/wp-content/uploads/2023/04/Beneficios-de-crecer-con-mascotas-min.jpg"
                alt="Busqueda de mascotas"
            />
            <div className="relative z-10 p-6 bg-black bg-opacity-50 rounded-lg max-w-3xl text-center">
                <h1 className="text-white text-4xl font-semibold mb-4">Bienvenido a lifeMascot</h1>
                <p className="text-white text-lg leading-relaxed">
                ¿Por qué adoptar?

Amor Incondicional: Los perritos en adopción están listos para dar y recibir amor sin condiciones.
Salvar una Vida: Al adoptar, estás brindando una segunda oportunidad a un perrito que lo necesita desesperadamente.
Variedad de Razas y Tamaños: Desde pequeños chihuahuas hasta grandes daneses, ¡tenemos a tu próximo mejor amigo esperándote!
¿Cómo Funciona?

Explora Nuestros Perfiles: Navega a través de nuestras fotos y descripciones detalladas para encontrar el perrito que se adapte mejor a tu estilo de vida y personalidad.


                </p>
            </div>
        </div>
    );
}

export default Principal;
