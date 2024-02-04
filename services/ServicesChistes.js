
async function GetChistes() {
    try {
      const apiUrl = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist`;
  
      const respuesta = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const datos = await respuesta.json();

      if (respuesta.ok) {
          null
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      }
      return datos;
      
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Re-lanza el error para que pueda ser manejado por el código que llama a GetNotice
    }
  }
  
  module.exports = {GetChistes}