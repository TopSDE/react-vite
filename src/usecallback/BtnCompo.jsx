import React, { memo } from 'react'

const BtnCompo = (props) => {
    const {children, fun} = props
    console.log(children);
    
    return (
        <>
            <button onClick={fun}>{children}</button>
        </>
    )
}
export default memo(BtnCompo)