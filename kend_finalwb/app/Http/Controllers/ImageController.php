<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Obtener todas las imágenes y devolverlas como respuesta JSON
        $images = Image::all();
        return response()->json($images);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validar la solicitud y guardar la imagen en el sistema de archivos y la base de datos
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Ejemplo de reglas de validación
        ]);

        // Guardar la imagen en el sistema de archivos
        $imagePath = $request->file('image')->store('public/images');

        // Crear un nuevo registro de imagen en la base de datos
        $image = Image::create([
            'url' => $imagePath,
            // Otras columnas si es necesario
        ]);

        // Devolver una respuesta adecuada, por ejemplo, el ID de la imagen creada
        return response()->json(['id' => $image->id], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        // Buscar la imagen por su ID
        $image = Image::find($id);

        // Si la imagen no se encuentra, devolver un mensaje de error
        if (!$image) {
            return response()->json(['error' => 'Imagen no encontrada'], 404);
        }

        // Devolver la URL de la imagen almacenada en el sistema de archivos
        return response()->json(['url' => Storage::url($image->url)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Lógica para actualizar una imagen existente, si es necesario
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Buscar la imagen por su ID
        $image = Image::find($id);

        // Si la imagen no se encuentra, devolver un mensaje de error
        if (!$image) {
            return response()->json(['error' => 'Imagen no encontrada'], 404);
        }

        // Eliminar la imagen del sistema de archivos
        Storage::delete($image->url);

        // Eliminar el registro de imagen de la base de datos
        $image->delete();

        // Devolver una respuesta de éxito
        return response()->json(['message' => 'Imagen eliminada correctamente']);
    }
}
