import { useEffect, useState } from "react"



const Test = () => {

    const [search, setSearch] = useState("")


    const [players, setPlayers] - useState([{
        name: "david",
        age: "35",
        pet: [{}],
        children: [{}]
    }])

    useEffect(() => {

        // spread operator [...]
        // copying the array elements one by one

        const playersCopy = [...players]

        playersCopy.sort()

        setPlayers(playersCopy)

        // players.sort()
        
        // const user = {
        //     name: "david"
        // }

        // const userCopy = {...user}

        const newPlayers = players.map(player => {

            const age = parseInt(player.age)

            return {
                ...player,
                age,
                isAdult: age >= 18
            }
        })

        const user = users.find(user => user.id === "dkasjdksfajriausd")

        const copyUser = {
            ...user,
            age: Number(user.age)
        }

        copyUser



        /*
        newPlayers = 
            [
                {
                    name: "david",
                    age: 35,
                    isAdult: true
                }
            ]
        */


    }, [])


    return <></>
}