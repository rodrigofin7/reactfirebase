import react from 'react'

const linkForms = () => 
{
    return (<form className="card card-body">
           <div className="form-group input-group">
               <div className="imput-group-text bg-light">
                   <i className="material-icons">insert_link</i>
               </div>
               <input
               type="text"
               className="form-control"
               placeholder="http://someurl.com"
               name = "url"
               >
               </input>
           </div>
          
           <div className="form-group input-group">
               <div className="imput-group-text bg-light">
                   <i className="material-icons">create</i>
               </div>
               <input
               type="text"
               className="form-control"
               placeholder="name"
               name = "name"
               >
               </input>
           </div>

          </form>); 
}

export default linkForms;
