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

    const newPost = {
      ...formData,
      [event.target.name]: event.target.value
    }

    setFormData(newPost)


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
            <form action="">
              {/* input del titolo */}
              <div>
                <label htmlFor="formTitle">titolo del post:</label>
                <input type="text" name="title" id="formTitle" className="form-control" value={formData.title} onChange={handleImputChange}/>
              </div>

              {/* input della descrizione */}
              <div>
                <label htmlFor="formDescription">descrizione del post:</label>
                <textarea name="description" id="formDescription" className="form-control" value={formData.description} onChange={handleImputChange}></textarea>
              </div>
            </form>
          </div>
        </section>

       
        
      </main>
      {/* fine parte del main */}
    </>
  )
}

export default App
