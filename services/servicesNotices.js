
async function GetNotice() {
  try {
    const params = new URLSearchParams({
      access_key: '42b5d74a0b43b94c25fefa32914b49fb',
      categories: '-general,-sports',
      sort: 'published_desc',
      limit: 10,
    });

    const apiUrl = `http://api.mediastack.com/v1/news?${params}`;

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

module.exports = {GetNotice}