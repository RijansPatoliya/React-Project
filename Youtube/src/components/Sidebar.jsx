
const Sidebar = () => {

  const data1=[
    {id:1,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true",text:"Home",className:"h"},
    {id:2,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true",text:"Explore"},
    {id:3,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true",text:"Shorts"},
    {id:4,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true",text:"Subscription"}
  ]

  const data2=[
    {id:1,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true",text:"Library"},
    {id:2,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true",text:"History"},
    {id:3,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true",text:"Your video"},
    {id:4,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true",text:"Watch later"},
    {id:5,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true",text:"Liked videos"},
    {id:6,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true",text:"show more"}
  ]

  const data3=[
    {id:1,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",text:"Nadir On Go"},
    {id:2,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",text:"Figma"},
    {id:3,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",text:"Mkhf"},
    {id:4,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",text:"Cock boss"},
    {id:5,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true",text:"Fitness"},
    {id:6,url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",text:"Alux.com"}
  ]




  return (
    <>
    <div id='sidebar'>
        <div className="logo">
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/hambarger.png " className="bars"/>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" className="youtubeLogo"/>
        </div>

      <div className="line">
      {data1.map((i)=>(
        <div key={i.id} className={i.id === 1 ? 'icones special-style' : 'icones'}>
            <img src={i.url}/>
            <p>{i.text}</p>
        </div>
       ))}
      </div>

      <div className="line">
        {data2.map((i)=>(
            <div key={i.id} className="icones">
               <img src={i.url}/>
               <p>{i.text}</p>
            </div>
        ))}
      </div>
      
      <h3>Subscription</h3>

      <div className="line">
        {data3.map((i)=>(
            <div key={i.id} className="icones">
               <img src={i.url}/>
               <p>{i.text}</p>
            </div>
        ))}
      </div>


    </div>
    </>
  )
}

export default Sidebar