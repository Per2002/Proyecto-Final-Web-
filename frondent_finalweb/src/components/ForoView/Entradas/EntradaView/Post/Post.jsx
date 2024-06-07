const Post = (props) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 max-w-screen-lg mx-auto">
            <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png" alt="" />
                <div>
                    <p className="font-semibold text-black">{props.nombre}</p>
                    <p className="text-gray-600 text-sm">Publicado el {props.creacion}</p>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-black mt-4">{props.titulo}</h2>
            <p className="text-gray-700 mt-2">{props.contenido}</p>
            <div className="mt-4">
                <img src="https://content.nationalgeographic.com.es/medio/2023/08/25/perro_adf93861_1412331876_230825124420_800x800.jpg" className="w-full object-cover rounded-lg" alt="Post Image" />
            </div>
            <div className="mt-4 flex justify-between">
                <button className="text-blue-500 font-semibold hover:text-blue-700">Me gusta</button>
                <button className="text-blue-500 font-semibold hover:text-blue-700">Compartir</button>
            </div>
        </div>
    );
}

export default Post;
