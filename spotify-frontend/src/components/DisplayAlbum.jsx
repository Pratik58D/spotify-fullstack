import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

  const {id} = useParams();
  // console.log(id);

  const albumData = albumsData[id];

  // console.log(albumData)
  const {playWithId} = useContext(PlayerContext);


  return (
    <div>
        <Navbar />


        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
          <img src={albumData.image} className='w-48 rounded' alt="" />
          <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 mdLtext-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
              <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
              <b>Spotify</b>
               1,323,154 likes
              <b>50 songs,</b>
              about 2 hr 30 min
              

            </p>
          </div>

        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>

          <p><b className='mr-4'>#</b>Title</p>
          <p>Album</p>
          <p className='hidden sm:block'>Date Added</p>
          <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <hr />
       {
        songsData.map((item,index) =>(
          <div onClick={()=>playWithId(item.id)} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b]  cursor-pointer' key={index}>
            <p className='text-white'>
              <b className='mr-4 text-[#a7a7a7'>{index+1}</b>
              <img src={item.image} className='inline w-10 mr-5' alt="" />
              {item.name}
            </p>
            <p className='text-[15px]'>{albumData.name}</p>
            <p className='text-[15px] hidden sm:block'>5 day ago</p>
            <p className='text-[15px] text-center'>{item.duration}</p>
             </div>

        ))
       }
      
      
    </div>
  )
}

export default DisplayAlbum
