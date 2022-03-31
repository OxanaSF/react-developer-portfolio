import React from 'react'

const WebDevProject = (props) => {
  return (
    <div class="card">
    <div class="card-overlay">
      <h1 class="card-overlay-heading">{props.title}</h1>
      <button class="card-overlay-btn web">{props.url}</button>
      <button class="card-overlay-btn github">{props.githubLink}</button>
    </div>
    <img src={props.imgSrc} class="card-img" alt="amg1" />
  </div>
  )
}

export default WebDevProject