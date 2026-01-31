import React, { useCallback, useState } from 'react'
import Counter from './Counter'
import BtnCompo from './BtnCompo'

const MainCompo = () => {

    const [age, setAge] = useState(24)
    const [sal, setSal] = useState(100000)

    const ageIncrement = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const salIncrement = useCallback(() => {
        setSal(sal + 30000)
    }, [sal])

    return (
        <>
            <Counter count={age}>AGE COUNT</Counter>
            <Counter count={sal}>SAL COUNT</Counter>
            <BtnCompo fun={ageIncrement}>
                AGE INCREMENT
            </BtnCompo>
            <BtnCompo fun={salIncrement}>
                SAL INCREMENT
            </BtnCompo>
        </>
    )
}
export default MainCompo