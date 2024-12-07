
const Header = () => {

    const tags=[
        {id:1,text:"All"},
        {id:2,text:"Web Development"},
        {id:3,text:"Live rodemd"},
        {id:4,text:"Rijans"},
        {id:5,text:"Data Structures"},
        {id:6,text:"puspa2"},
        {id:7,text:"UNIX Opera"},
        {id:8,text:"indian world"},
        {id:9,text:"Mobile Games"},
        {id:10,text:"hell royal"}
    ]

  return (
    <>
    <div>
    <nav>
      <div className="search">
        <div className="textInput">
        <input type="text" placeholder="  Search..."/>
        </div>
        <div className="search-img">
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" className="img1"/>
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" className="img2"/>
        </div>
     </div>

      <div className="navIcone">
           <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"/>
           <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"/>
           <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true"/>
     </div>
     </nav>
     <div className="tags">
     
       {tags.map((i)=>(
        <div key={i.id} className={i.id == 1? 'spe ' : 'tag' }>
           <p>{i.text}</p>
        </div>
       ))}

  </div>
  
  </div>

    </>
  )
}

export default Header