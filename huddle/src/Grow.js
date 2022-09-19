import React from 'react'
import growTogether from './images/illustration-grow-together.svg'
import yourUsers from './images/illustration-your-users.svg'
import flowingconvo from './images/illustration-flowing-conversation.svg'

import './Grow.css'

function Grow() {
  return (
    <div className="">
      {/* Grow */}
      <div className="flex ma6">
        <div className="flex-row self-center">
          <h1>Grow Together</h1>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form
          </p>
        </div>
        <div className="ml6">
          <img className="togetherImg" src={growTogether} alt="grow image" />
        </div>
      </div>

      {/* FLOWING */}
      <div className="flex ma6">
        <div>
          <img className="togetherImg" src={flowingconvo} alt="grow image" />
        </div>
        <div className="justify-center self-center flex-row ml6">
          <h1>Flowing Conversations</h1>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex ma6">
        <div className="self-center flex-row">
          <h1>Your Users</h1>
          <p>
            It taks no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immeiately
          </p>
        </div>
        <div className="ml6">
          <img className="togetherImg" src={yourUsers} alt="grow image" />
        </div>
      </div>
    </div>
  )
}

export default Grow
