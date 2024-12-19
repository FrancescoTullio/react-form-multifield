import { useCallback, useState } from "react";

const initialFormPost = {
  title: "",
  description: "",
  category: "",
  image: "",
  available: false,
  tags: ""
};



function App() {

  const [posts, setPost] = useState([]) //array
  const [formData, setFormData] = useState(initialFormPost) //object


  // funzioni di useCallback che aggiornano l'array posts

  const handleImputChange = (event) => {

    //genero una variabile e gli assegno la stringa con il nome della chiave dell'oggetto da cambiare prendendola dal'attributo html
    const keyToChange = event.target.name;



    //genero la variabile che sarà inserita nell'oggetto
    let newValue;


    //controllo se input cambiato è il checkbox
    if (event.target.type === "checkbox") {
      newValue = event.target.checked;
    } else {
      newValue = event.target.value;
    }


    //genero il nuovo oggetto integrando i nuovi dati sfruttando il rest operator
    const newData = {
      ...formData,
      [keyToChange]: newValue,
    };


    //assegno con il usestate il nuovo oggetto
    setFormData(newData);

  }



  // funzione del submit


  const handleSubmitForm = (event) => {

    // blocco il refresh della pagina
    event.preventDefault();

    // genero un nuovo oggetto aggiungendo la chiave id
    const newPost = {
      ...formData,
      id: Date.now()
    };

    // uso il rest operator per fare un nuovo array
    const newArrayPosts = [...posts, newPost];


    // setto il nuovo array nella variabile reattiva
    setPost(newArrayPosts);

    console.log(posts)

    // ripulisco il form
    setFormData(initialFormPost)
  }

    // funzione della cancellazione dalla card

    const handleDeliteButton = (idToDelite) => {


      const newArray = posts.filter((curPost) => curPost.id !== idToDelite);
    setPost(newArray);


    }



  return (
    <>

      {/* parte dell'header */}
      <header>
        <div className="container">
          <h1 className="text-center py-3">Lista card post:</h1>
        </div>
      </header>
      {/* fine parte dell'header */}

      {/* inizio parte del main */}
      <main>
        <section>
          <div className="container">
            <h2>Compila il post per aggiungere un nuovo post:</h2>

            {/* form */}
            <form onSubmit={handleSubmitForm}>


              {/* input del titolo */}
              <div className="my-2">
                <label htmlFor="formTitle" className="my-2">titolo del post:</label>
                <input type="text" name="title" id="formTitle" className="form-control" value={formData.title} onChange={handleImputChange} />
              </div>

              {/* input della descrizione */}
              <div className="my-2">
                <label htmlFor="formDescription" className="my-2">descrizione del post:</label>
                <textarea name="description" id="formDescription" className="form-control" value={formData.description} onChange={handleImputChange}></textarea>
              </div>

              {/* input dell'immagine */}
              <div className="my-2">
                <label htmlFor="formImage" className="my-2">metti quil'immagine del tuo post</label>
                <input type="text" name="image" id="formImage" className="form-control" value={formData.image} onChange={handleImputChange} />
              </div>

              {/* input della categoria */}
              <div className="my-2">
                <label htmlFor="formCategory" className="my-2">scegli la categoria del post</label>
                <select name="category" id="formCategory" className="form-control" onChange={handleImputChange} value={formData.category}>
                  <option value="categoria 0">-scegli categoria-</option>
                  <option value="categoria 1">categoria 1</option>
                  <option value="categoria 2">categoria 2</option>
                  <option value="categoria 3">categoria 3</option>
                </select>
              </div>

              <div className="my-2">
                <label htmlFor="aviableForm" >spunta il check se il post sara visualizzabile</label>
                <input type="checkbox" name="available" id="aviableForm" className="form-contol" checked={formData.available} onChange={handleImputChange} />
                {formData.available && <div>attenzione hai spuntato il check il tuo post cosi non sara visualizzato</div>}
              </div>
              <button className="btn btn-primary" type="submit">Invio</button>
            </form>
          </div>
        </section>

        {/* sezione della card */}
        <section>
          <div className="container">
            <h2 className="text-center">Le card:</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
              {posts.map((curPost) => {
                console.log(curPost)
                return (
                  <div className="col" key={curPost.id}>
                    <div className="card">
                      <img src={curPost.image} alt="" />
                      <div className="card-body">
                        <h3>{curPost.tile}</h3>
                        <p>{curPost.description}</p>
                        <p>{curPost.category}</p>
                        <button className="btn btn-warning" onClick={() => handleDeliteButton(curPost.id)}>cancella</button>

                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>


        </section>



      </main >
      {/* fine parte del main */}
    </>
  )
}

export default App
