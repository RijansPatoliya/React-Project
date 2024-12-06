import React from 'react'

const MainBody = () => {

const data1 = [
  {id:1,img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/object1.png?raw=true",title:"Liked Songs"},
  {id:2,img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true",title:"Netflix playlist"},
  {id:3,img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true",title:"box-text"},
  {id:4,img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true",title:"Liked songs"},
  {id:5,img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true",title:"Dance/electronic mix"}
]

const data2=[
  {no:1,img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true",message1:"Motivation daily...",message2:"Ran ina Scoti"},
  {no:2,img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true",message1:"The Stories of Ma..",message2:"Ran ina Scoti"},
  {no:3,img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true",message1:"The Alexa Show",message2:"Ran ina Scoti"},
  {no:4,img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true",message1:"Words Beyond act.",message2:"Ran ina Scoti"},
  {no:5,img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true",message1:"Meditation Self",message2:"Ran ina Scoti"},
  {no:6,img_link:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true",message1:"Motivation daily...",message2:"Ran ina Scoti"}
]

  return (
    <>
     <div id='container'>
  <div id='sidebar'>
        <i> 
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true"/>
        </i>

        <div className="menu-1">
            <span>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true"/>
                <p>Home</p>
            </span>
            <span>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true"/>
                <p>Search</p>
            </span>
            <span>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true"/>
                <p>Your Laibrary</p>
            </span>
        </div>

        <div className='menu-2'>
         <div className='icones'>
         <div className='img-icone'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true"/>
          </div>
          <div className='img-text'>
            <p>Create Playlist</p>
          </div>
         </div>
         <div className='icones'>
         <div className='img-icone'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"/>
          </div>
          <div className='img-text'>
            <p>Liked Song</p>
          </div>
         </div>
         <div className='icones'>
         <div className='img-icone'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true"/>
          </div>
          <div className='img-text'>
             <p>Your Episodes</p>
          </div>
         </div>
        </div>

        <div className='menu-3'>
            <p>FAV</p>
            <p>Daily Mix 1</p>
            <p>Discover Weekly</p>
            <p>Malayalam</p>
            <p>Dance/Electonix Mix</p>
            <p>EDM/Popular</p>
        </div>

        <div id='install-img'>
           <span>
           <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true"/>
           <p>Install App</p>
           </span>
        </div>

    </div>
  

    <div id='main'>

     <div className='img'>
     <div className='arrow'>
              <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true"/>
       </div>  

       <div className='person'>
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true "/>
       </div>
     </div>

     <h2>Good morning</h2>

     <div id='boxes1'>
        {
          data1.filter((i)=>i.id%2!=0).map((i)=>(
            <div key={i.id} className='box1 box-img box-text'>
              <img src={i.img} />
              <p>{i.title}</p>
            </div>
          ))
        }

     </div>

     <h3>Shows you might like</h3>

     <div id='boxes2'>
        {
          data2.map((r)=>(
            <div key={r.no} className='cart1 cart-img cart-text'>
              <img src={r.img_link}/>
              <h5>{r.message1}</h5>
              <p>{r.message2}</p>
            </div>
          ))
        }
     </div>

    </div>
    </div>
    </>
  )
}

export default MainBody