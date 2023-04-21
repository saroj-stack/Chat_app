import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) =>{
    return (
    <div style= {{height: '100vh'}}>
        <PrettyChatWindow
        projectId='6eba18bd-2674-4566-af60-51de2e55c38d'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
    />
    </div>
    )
}

export default ChatsPage