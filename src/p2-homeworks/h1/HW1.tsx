import React from 'react'
import Message from "./Message";


const messageData = {
    avatar: 'https://techmesse.com/img/anonymous.jpg',
    name: 'Вадим',
    message: 'Недурно вышло, правда?',
    time: '22:00',
}

function HW1() {
    return (

        <div>
            <hr/>
            homeworks 1

            should work (должно работать)
            <div >
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
            </div>


            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeMessage/>*!/*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1
