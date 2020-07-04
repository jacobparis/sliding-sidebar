import * as React from "react"

import { useMachine } from '@xstate/react'
import { AppMachine } from '../machines/AppMachine'

export default function HomeScene() {
    const [state, send] = useMachine(AppMachine.withContext({
        lenders: []
    }), {
        devTools: true
    })

    return (
        <h1> Home Scene </h1>
    )
}
