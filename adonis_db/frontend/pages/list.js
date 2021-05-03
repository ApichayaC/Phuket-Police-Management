import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Proflie from '../pages/profile'

export default function NameList() {
    const URL = 'http://127.0.0.1:3333'

    const [list, setList] = useState([])
    const [search, setSearch] = useState('');
    const [name, setName] = useState([]);
    const getName = async () => {
        let lists = await axios.get(URL + '/shows')
        console.log(lists)
        setList(Object.assign([], lists.data));
        setName(Object.assign([],lists.data));
    }

    const allName = () => {
        return name.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.rank}</td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <button onClick={Proflie} type='button'>แสดงข้อมูล</button>
                </tr>
            )
        })
    }
    useEffect(() => {
        getName()
    }, [])

    //search
    const searchName = async () => {
        let person = [];
        await list.map((item, index) => {
            console.log(item.name.includes(search));
            if (item.name.includes(search)) {
                person.push(item)
            } else {
                console.log(name);
            }
        })
        setName(person)
    }



    return (
        <div>
            <input type='text' onChange={e => setSearch(e.target.value.trim())} />
            <button onClick={searchName}>Search</button>
            <table>
                {allName()}
            </table>
        </div>
    )
}