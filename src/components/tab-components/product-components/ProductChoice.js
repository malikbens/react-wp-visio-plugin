import React from 'react'
import Premium from './Premium'
import Smart from './Smart'

export default function ProductChoice(props) {
    if (props.values.need == 'Je cherche la panne de mon appareil' || props.values.need == "J'ai besoin d'aide pour remplacer ma pièce" || props.values.access == "Encastré mais difficilement accessible" || props.values.level == '0'){
        return (
            <Premium />
        )
    } return <Smart />
 
}
