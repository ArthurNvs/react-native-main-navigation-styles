import React from 'react'
import CentralText from '../components/CentralText'

export default props => {
    const r = props.route
    const num = r && r.params && r.params.num ? r.params.num : 0
    return (
        <CentralText>
            C Screen - forward pushed param: {num}
        </CentralText>
    )
}