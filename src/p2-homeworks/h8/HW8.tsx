import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

// need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
          <span>{p.name}</span>
            {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8
            <div className={styles.HW8}>


                {/*should work (должно работать)*/}
                {finalPeople}
                <div className={styles.buttons}>
                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton onClick={sortUp}>sort down</SuperButton></div>
                    <div><SuperButton onClick={sortUp}>check 18</SuperButton></div>
                    {/*<div>sort down</div>*/}
                    {/*check 18*/}
                </div>
                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativePeople/>*/}
                <hr/>
            </div>
        </div>
    )
}

export default HW8
